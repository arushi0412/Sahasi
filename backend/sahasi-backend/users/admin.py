# users/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from .models import User, TrustedContact

@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    pass

@admin.register(TrustedContact)
class TrustedContactAdmin(admin.ModelAdmin):
    list_display = ("name", "owner", "phone", "relationship", "created_at")
