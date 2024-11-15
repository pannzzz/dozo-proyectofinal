from django.shortcuts import render, get_object_or_404, redirect # type: ignore
from django.contrib.auth import login, authenticate, logout as auth_logout # type: ignore
from django.contrib.auth.forms import AuthenticationForm # type: ignore
from django.db import IntegrityError # type: ignore
from .models import CustomUser, Producto, Categoria, Carrito, Venta
from .forms import CustomUserCreationForm, CustomUserChangeForm, ProductoForm, CategoriaForm, CarritoForm, VentaForm

# User Views
def registro(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST, request.FILES)
        if form.is_valid():
            # Verifica si las contraseñas coinciden
            if form.cleaned_data['password1'] == form.cleaned_data['password2']:
                try:
                    # Guarda el usuario usando el formulario
                    user = form.save()
                    # Inicia sesión automáticamente
                    login(request, user)
                    # Redirige a la vista deseada después del registro
                    return redirect('mostrar_user')
                except IntegrityError:
                    return render(request, 'registrouser.html', {
                        'form': form,
                        'error': "Error al crear el usuario. Por favor, inténtalo de nuevo."
                    })
            else:
                return render(request, 'registrouser.html', {
                    'form': form,
                    'error': "Las contraseñas no coinciden."
                })
        else:
            return render(request, 'registrouser.html', {
                'form': form,
                'error': "Hay errores en la información ingresada. Por favor, revisa los campos."
            })
    else:
        form = CustomUserCreationForm()
        mytitle = "Registro Nuevos Usuarios"
        return render(request, 'registrouser.html', {
            'title': mytitle,
            'form': form
        })

def mostrar_user(request):
    users = CustomUser.objects.all()
    return render(request, 'mostrar_user.html', {
        'users': users
    })

def editar_user(request, user_id):
    user = get_object_or_404(CustomUser, id=user_id)
    if request.method == 'POST':
        form = CustomUserChangeForm(request.POST, request.FILES, instance=user)
        if form.is_valid():
            form.save()
            return redirect('mostrar_user')
    else:
        form = CustomUserChangeForm(instance=user)
    return render(request, 'editar_user.html', {
        'form': form,
        'user': user
    })

def eliminar_user(request, user_id):
    user = get_object_or_404(CustomUser, id=user_id)
    if request.method == 'POST':
        user.delete()
        return redirect('mostrar_user')
    return render(request, 'eliminar_user.html', {
        'user': user
    })

def loginzzz(request):
    if request.method == "GET":
        return render(request, 'login.html', {
            'form': AuthenticationForm
        })
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST["password"])
        if user is None:
            return render(request, 'login.html', {
                "form": AuthenticationForm,
                'error': 'El usuario o la contraseña es incorrecto'
            })
        else:
            login(request, user)
            return redirect('mostrar_user')

def logout(request):
    auth_logout(request)
    return redirect('paciente_login')



# Producto Views
# Mostrar productos
def mostrar_producto(request):
    productos = Producto.objects.all()
    return render(request, 'productos/producto_list.html', {
        'productos': productos
    })

# Crear un producto
def crear_producto(request):
    if request.method == 'POST':
        form = ProductoForm(request.POST, request.FILES)
        if form.is_valid():
            try:
                form.save()
                return redirect('mostrar_producto')
            except Exception as e:
                return render(request, 'productos/producto_create.html', {
                    'form': form,
                    'error': f"Error al crear el producto: {str(e)}"
                })
        else:
            return render(request, 'productos/producto_create.html', {
                'form': form,
                'error': "Hay errores en la información ingresada. Por favor, revisa los campos."
            })
    else:
        form = ProductoForm()
        return render(request, 'productos/producto_create.html', {
            'form': form
        })

# Editar un producto
def editar_producto(request, producto_id):
    producto = get_object_or_404(Producto, id=producto_id)
    if request.method == 'POST':
        form = ProductoForm(request.POST, request.FILES, instance=producto)
        if form.is_valid():
            try:
                form.save()
                return redirect('mostrar_producto')
            except Exception as e:
                return render(request, 'productos/producto_edit.html', {
                    'form': form,
                    'producto': producto,
                    'error': f"Error al actualizar el producto: {str(e)}"
                })
        else:
            return render(request, 'productos/producto_edit.html', {
                'form': form,
                'producto': producto,
                'error': "Hay errores en la información ingresada. Por favor, revisa los campos."
            })
    else:
        form = ProductoForm(instance=producto)
        return render(request, 'productos/producto_edit.html', {
            'form': form,
            'producto': producto
        })

# Eliminar un producto
def eliminar_producto(request, producto_id):
    producto = get_object_or_404(Producto, id=producto_id)
    if request.method == 'POST':
        try:
            producto.delete()
            return redirect('mostrar_producto')
        except Exception as e:
            return render(request, 'productos/producto_delete.html', {
                'producto': producto,
                'error': f"Error al eliminar el producto: {str(e)}"
            })
    return render(request, 'productos/producto_delete.html', {
        'producto': producto
    })


# Categoria Views
# Mostrar categorías
def mostrar_categoria(request):
    categorias = Categoria.objects.all()
    return render(request, 'categorias/categoria_list.html', {
        'categorias': categorias
    })

# Crear una nueva categoría
def crear_categoria(request):
    if request.method == 'POST':
        form = CategoriaForm(request.POST)
        if form.is_valid():
            try:
                form.save()
                return redirect('mostrar_categoria')
            except Exception as e:
                return render(request, 'categorias/categoria_create.html', {
                    'form': form,
                    'error': f"Error al crear la categoría: {str(e)}"
                })
        else:
            return render(request, 'categorias/categoria_create.html', {
                'form': form,
                'error': "Hay errores en la información ingresada. Por favor, revisa los campos."
            })
    else:
        form = CategoriaForm()
        return render(request, 'categorias/categoria_create.html', {
            'form': form
        })

# Editar una categoría
def editar_categoria(request, categoria_id):
    categoria = get_object_or_404(Categoria, id=categoria_id)
    if request.method == 'POST':
        form = CategoriaForm(request.POST, instance=categoria)
        if form.is_valid():
            try:
                form.save()
                return redirect('mostrar_categoria')
            except Exception as e:
                return render(request, 'categorias/categoria_edit.html', {
                    'form': form,
                    'categoria': categoria,
                    'error': f"Error al actualizar la categoría: {str(e)}"
                })
        else:
            return render(request, 'categorias/categoria_edit.html', {
                'form': form,
                'categoria': categoria,
                'error': "Hay errores en la información ingresada. Por favor, revisa los campos."
            })
    else:
        form = CategoriaForm(instance=categoria)
        return render(request, 'categorias/categoria_edit.html', {
            'form': form,
            'categoria': categoria
        })

# Eliminar una categoría
def eliminar_categoria(request, categoria_id):
    categoria = get_object_or_404(Categoria, id=categoria_id)
    if request.method == 'POST':
        try:
            categoria.delete()
            return redirect('mostrar_categoria')
        except Exception as e:
            return render(request, 'categorias/categoria_delete.html', {
                'categoria': categoria,
                'error': f"Error al eliminar la categoría: {str(e)}"
            })
    return render(request, 'categorias/categoria_delete.html', {
        'categoria': categoria
    })

# Carrito Views
def mostrar_carrito(request):
    carritos = Carrito.objects.all()
    return render(request, 'carrito_list.html', {
        'carritos': carritos
    })

def editar_carrito(request, carrito_id):
    carrito = get_object_or_404(Carrito, id=carrito_id)
    if request.method == 'POST':
        form = CarritoForm(request.POST, instance=carrito)
        if form.is_valid():
            form.save()
            return redirect('mostrar_carrito')
    else:
        form = CarritoForm(instance=carrito)
    return render(request, 'carrito_form.html', {
        'form': form,
        'carrito': carrito
    })

def eliminar_carrito(request, carrito_id):
    carrito = get_object_or_404(Carrito, id=carrito_id)
    if request.method == 'POST':
        carrito.delete()
        return redirect('mostrar_carrito')
    return render(request, 'carrito_confirm_delete.html', {
        'carrito': carrito
    })

# Venta Views
def mostrar_venta(request):
    ventas = Venta.objects.all()
    return render(request, 'venta_list.html', {
        'ventas': ventas
    })

def editar_venta(request, venta_id):
    venta = get_object_or_404(Venta, id=venta_id)
    if request.method == 'POST':
        form = VentaForm(request.POST, instance=venta)
        if form.is_valid():
            form.save()
            return redirect('mostrar_venta')
    else:
        form = VentaForm(instance=venta)
    return render(request, 'venta_form.html', {
        'form': form,
        'venta': venta
    })

def eliminar_venta(request, venta_id):
    venta = get_object_or_404(Venta, id=venta_id)
    if request.method == 'POST':
        venta.delete()
        return redirect('mostrar_venta')
    return render(request, 'venta_confirm_delete.html', {
        'venta': venta
    })
