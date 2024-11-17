from rest_framework import serializers
from .models import Producto, Categoria

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
