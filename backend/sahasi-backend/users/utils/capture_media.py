# users/utils/capture_media.py
import time
from io import BytesIO
from django.core.files.base import ContentFile

# Import OpenCV only if available to avoid crashing in environments without camera
try:
    import cv2
except Exception:
    cv2 = None

def capture_photo():
    """Return a ContentFile JPG or None (failsafe)."""
    if cv2 is None:
        return None
    try:
        cam = cv2.VideoCapture(0)
        if not cam.isOpened():
            return None
        ret, frame = cam.read()
        cam.release()
        if not ret:
            return None
        ok, buffer = cv2.imencode('.jpg', frame)
        if not ok:
            return None
        return ContentFile(buffer.tobytes(), name=f"photo_{int(time.time())}.jpg")
    except Exception:
        return None

def capture_video(duration=5):
    """Return a ContentFile video file or None (failsafe)."""
    if cv2 is None:
        return None
    try:
        cam = cv2.VideoCapture(0)
        if not cam.isOpened():
            return None
        fourcc = cv2.VideoWriter_fourcc(*'XVID')
        filename = f"video_{int(time.time())}.avi"
        out = cv2.VideoWriter(filename, fourcc, 20.0, (640, 480))
        start = time.time()
        while (time.time() - start) < duration:
            ret, frame = cam.read()
            if not ret:
                break
            out.write(frame)
        cam.release()
        out.release()
        # Load into ContentFile
        with open(filename, "rb") as f:
            return ContentFile(f.read(), name=filename)
    except Exception:
        return None
