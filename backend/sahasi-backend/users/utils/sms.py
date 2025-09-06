# sms.py
from django.conf import settings
from twilio.rest import Client

def send_twilio_sms(message, phone_numbers):
    """
    Send SMS using Twilio API
    """
    if not phone_numbers:
        return {"error": "No phone numbers provided"}

    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    results = {}

    for phone in phone_numbers:
        try:
            # Twilio expects E.164 format, e.g. +919876543210
            if not phone.startswith("+"):
                phone = f"+91{phone[-10:]}"  # Default India format
            msg = client.messages.create(
                body=message,
                from_=settings.TWILIO_PHONE_NUMBER,
                to=phone
            )
            results[phone] = {"sid": msg.sid, "status": msg.status}
        except Exception as e:
            results[phone] = {"error": str(e)}

    return results

