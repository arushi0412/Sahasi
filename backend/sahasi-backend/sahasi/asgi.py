# sahasi/asgi.py
import os, django
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import users.routing
from users.jwt_auth import JWTAuthMiddleware  # <-- add

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sahasi.settings")
django.setup()

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": JWTAuthMiddleware(
        URLRouter(users.routing.websocket_urlpatterns)
    ),
})
