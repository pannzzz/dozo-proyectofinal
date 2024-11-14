from django.contrib.auth.models import AbstractUser # type: ignore
from django.db import models # type: ignore

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('user', 'User'),
    ]
    email = models.EmailField(unique=True, verbose_name="Correo Electrónico")
    first_name = models.CharField(max_length=30, verbose_name="Nombre")
    last_name = models.CharField(max_length=30, verbose_name="Apellido")
    department = models.CharField(max_length=100, blank=True, null=True, verbose_name="Departamento")
    city = models.CharField(max_length=100, blank=True, null=True, verbose_name="Ciudad")
    address = models.TextField(blank=True, null=True, verbose_name="Dirección")
    postal_code = models.CharField(max_length=20, blank=True, null=True, verbose_name="Código Postal")
    
    # Relaciones ManyToMany
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',
        blank=True,
        help_text='Los grupos a los que pertenece este usuario. El usuario obtendrá todos los permisos otorgados a cada uno de sus grupos.',
        related_query_name='customuser',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_set',
        blank=True,
        help_text='Permisos específicos para este usuario.',
        related_query_name='customuser')

    def __str__(self):
        return f"{self.username} ({self.email})"
