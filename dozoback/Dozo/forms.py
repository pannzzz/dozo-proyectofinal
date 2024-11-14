from django import forms # type: ignore
from django.contrib.auth.forms import UserCreationForm # type: ignore
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password1', 'password2', 
                'first_name', 'last_name', 'department', 'city', 
                'address', 'postal_code']
