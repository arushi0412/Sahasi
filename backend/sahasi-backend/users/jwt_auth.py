# users/jwt_auth.py
from urllib.parse import parse_qs
from channels.middleware import BaseMiddleware
from channels.db import database_sync_to_async

class JWTAuthMiddleware(BaseMiddleware):
    async def __call__(self, scope, receive, send):
        # Import here, after Django settings are loaded
        from django.contrib.auth.models import AnonymousUser

        scope['user'] = AnonymousUser()
        token = None

        # 1) Check "Authorization: Bearer <token>" header
        headers = dict(scope.get('headers', []))
        auth_header = headers.get(b'authorization')
        if auth_header:
            try:
                text = auth_header.decode()
                if text.lower().startswith('bearer '):
                    token = text.split(' ', 1)[1].strip()
            except Exception:
                pass

        # 2) Query string fallback
        if not token:
            qs = parse_qs(scope.get('query_string', b'').decode())
            token = (qs.get('token') or [None])[0]

        if token:
            user = await self._get_user_from_token(token)
            if user is not None:
                scope['user'] = user

        return await super().__call__(scope, receive, send)

    @database_sync_to_async
    def _get_user_from_token(self, token: str):
        # Import inside method so it only runs after Django setup
        from rest_framework_simplejwt.authentication import JWTAuthentication
        from django.contrib.auth.models import AnonymousUser

        try:
            authenticator = JWTAuthentication()
            validated = authenticator.get_validated_token(token)
            return authenticator.get_user(validated)
        except Exception:
            return AnonymousUser()
