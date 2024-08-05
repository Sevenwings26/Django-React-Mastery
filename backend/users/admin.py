from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import User
from .forms import CustomUserCreationForm, CustomUserChangeForm


# create admin registration details 
class UserAdmin(BaseUserAdmin):
    ordering = ["email"]
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ["email", "first_name", "last_name", "is_staff","is_active"]
    list_display_links = ["email"]
    list_filter = ["email", "first_name", "last_name", "is_staff","is_active"]
    search_fields = ['email', 'first_name','last_name']

    fieldsets = (
        (
            _("Login Credentials"),{
                "fields": ("email","password",)
            },
        ),
        (
            _("Personal Information"), {
                "fields": ("first_name", "last_name")
            },
        ),
        (
            _("Important Dates"),
            {
                "fields":("last_login",),
            },
        )
    )

    add_fieldsets = (
        (None, {
            "classes":("wide",),
            "fields": ("email", "password1", "password2","is_staff","is_active"),
        },),
    )


# Register your models here.
admin.site.register(User, UserAdmin)