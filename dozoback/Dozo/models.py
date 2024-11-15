from django.db import models # type: ignore
from django.contrib.auth.models import AbstractUser # type: ignore

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
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default=' ')

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

class Categoria(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    TALLA_CHOICES = [
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
        ('XL', 'Extra Large'),
    ]
    imagen = models.ImageField(upload_to='Dozo/images/',null=True,default='entrevista_cambot_trabajo_remoto.png')
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    talla = models.CharField(max_length=2, choices=TALLA_CHOICES)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    categoria = models.ForeignKey('Categoria', on_delete=models.CASCADE, null=True, blank=True)
    estado = models.BooleanField(default=True)  # Activo o inactivo

    def __str__(self):
        return self.titulo
    

class Estado(models.Model):
    nombre = models.CharField(max_length=50)  # Ej: "En proceso", "Enviado", etc.

    def __str__(self):
        return self.nombre

class Venta(models.Model):
    usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    fecha_venta = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    estado = models.ForeignKey(Estado, on_delete=models.CASCADE)

    def __str__(self):
        return f"Venta {self.id} - Usuario {self.usuario}"

class VentaProducto(models.Model):
    venta = models.ForeignKey(Venta, on_delete=models.CASCADE, related_name='productos')
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    precio_unidad = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.producto.titulo} x {self.cantidad}"

class Carrito(models.Model):
    usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()

    def __str__(self):
        return f"Carrito de {self.usuario} - {self.producto.titulo} x {self.cantidad}"
