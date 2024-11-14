from django.contrib import admin # type: ignore
from .models import CustomUser
# Register your models here.

admin.site.register(CustomUser)