"""
URL configuration for dozoback project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin # type: ignore
from django.urls import path # type: ignore
from Dozo import views
from django.conf import settings # type: ignore
from django.conf.urls.static import static # type: ignore


urlpatterns = [
    path('admin/', admin.site.urls),
    # User URLs
    path('users/registro/', views.registro, name='registro'),
    path('users/', views.mostrar_user, name='mostrar_user'),
    path('users/editar/<int:user_id>/', views.editar_user, name='editar_user'),
    path('users/eliminar/<int:user_id>/', views.eliminar_user, name='eliminar_user'),
    path('login/', views.loginzzz, name='login'),
    path('logout/', views.logout, name='logout'),

    # Producto URLs
    path('productos/', views.mostrar_producto, name='mostrar_producto'),
    path('productos/nuevo/', views.crear_producto, name='crear_producto'),
    path('productos/editar/<int:producto_id>/', views.editar_producto, name='editar_producto'),
    path('productos/eliminar/<int:producto_id>/', views.eliminar_producto, name='eliminar_producto'),

    # Categoria URLs
    path('categorias/', views.mostrar_categoria, name='mostrar_categoria'),
    path('categorias/nueva/', views.crear_categoria, name='crear_categoria'),
    path('categorias/editar/<int:categoria_id>/', views.editar_categoria, name='editar_categoria'),
    path('categorias/eliminar/<int:categoria_id>/', views.eliminar_categoria, name='eliminar_categoria'),

    # Carrito URLs
    path('carritos/', views.mostrar_carrito, name='mostrar_carrito'),
    path('carritos/editar/<int:carrito_id>/', views.editar_carrito, name='editar_carrito'),
    path('carritos/eliminar/<int:carrito_id>/', views.eliminar_carrito, name='eliminar_carrito'),

    # Venta URLs
    path('ventas/', views.mostrar_venta, name='mostrar_venta'),
    path('ventas/editar/<int:venta_id>/', views.editar_venta, name='editar_venta'),
    path('ventas/eliminar/<int:venta_id>/', views.eliminar_venta, name='eliminar_venta'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
