from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings
import requests
from pyfcm import FCMNotification
# users/tasks.py
from .utils.sms import send_twilio_sms



@shared_task(bind=True, max_retries=3, default_retry_delay=15)
def send_sos_email(self, subject, message, recipient_list):
    try:
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=recipient_list,
            fail_silently=True,
        )
    except Exception as e:
        raise self.retry(exc=e)


@shared_task(bind=True, max_retries=3, default_retry_delay=15)
def send_sos_push(self, tokens, title, body):
    try:
        if not tokens:
            return {"error": "No FCM tokens"}
        push_service = FCMNotification(api_key=settings.FCM_SERVER_KEY)
        return push_service.notify_multiple_devices(
            registration_ids=tokens,
            message_title=title,
            message_body=body,
        )
    except Exception as e:
        raise self.retry(exc=e)


@shared_task(bind=True, max_retries=3, default_retry_delay=15)
def send_sos_sms(self, message, phone_numbers):
    try:
        return send_twilio_sms(message, phone_numbers)
    except Exception as e:
        raise self.retry(exc=e)