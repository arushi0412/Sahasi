import requests
from django.conf import settings

def send_fcm_notification(title, body, tokens):
    """
    Send push notification to multiple devices using Firebase FCM HTTP v1 API
    """
    if not tokens:
        return {"error": "No FCM tokens provided"}

    url = "https://fcm.googleapis.com/fcm/send"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"key={settings.FCM_SERVER_KEY}"
    }
    payload = {
        "registration_ids": tokens,
        "notification": {
            "title": title,
            "body": body,
        },
        "priority": "high",
    }

    r = requests.post(url, json=payload, headers=headers, timeout=15)
    try:
        return r.json()
    except Exception:
        return {"error": r.text[:500]}
