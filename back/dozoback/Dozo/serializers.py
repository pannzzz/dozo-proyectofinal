from rest_framework import serializers
from .models import Producto, Categoria, Cart, CartItem, CustomUser

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'  # Incluye todos los campos del modelo Categoria

class ProductoSerializer(serializers.ModelSerializer):
    # Serializar el nombre de la categoría asociada
    categoria = CategoriaSerializer(read_only=True)

    class Meta:
        model = Producto
        fields = '__all__'  # Incluye todos los campos del modelo Producto

class CartItemSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Producto.objects.all())

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity']

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ['id', 'user', 'items']
        
        
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'username', 'email', 'password', 
            'first_name', 'last_name', 
            'department', 'city', 'address', 
            'postal_code', 'role'
        ]
        extra_kwargs = {
            'password': {'write_only': True},  # Oculta la contraseña en las respuestas
            'email': {'required': True},      # Marca el email como obligatorio
        }

    def create(self, validated_data):
        # Crear el usuario con un método que maneje contraseñas
        return CustomUser.objects.create_user(**validated_data)