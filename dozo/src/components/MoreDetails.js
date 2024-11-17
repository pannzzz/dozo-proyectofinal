import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/MoreDetails.css';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/FooterComponent';

const MoreDetails = () => {
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const [producto, setProducto] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Llamar a la API para obtener los datos del producto
        fetch(`http://localhost:8000/api/productos/${id}/`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Verifica el objeto del producto
                setProducto(data);
            })
            .catch((error) => console.error('Error al cargar el producto:', error));
    }, [id]);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= 5) {
            setQuantity(newQuantity);
        }
    };

    if (!producto) {
        return <p>Cargando detalles del producto...</p>;
    }

    // Construir la URL de la imagen usando la ruta completa desde el backend
    const imageUrl = producto.imagen.startsWith('http')
        ? producto.imagen
        : `http://localhost:8000/media/${producto.imagen}`;

    return (
        <>
            <Navbar initialScrolled={true} />

            {/* Breadcrumb debajo del Navbar */}
            <div className="breadcrumb-container">
                <a href="/" className="breadcrumb-more">Dozo</a> / 
                <a href="/findgift" className="breadcrumb-more"> Search</a> / {producto.titulo}
            </div>

            <div className="details-container">
                {/* Imagen del producto */}
                <div className="details-image-section">
                    <img 
                        src={imageUrl} 
                        alt={producto.titulo} 
                        className="product-imagen" 
                        onError={(e) => e.target.src = 'https://via.placeholder.com/500x500'} // Imagen por defecto si falla
                    />
                </div>

                {/* Información del producto */}
                <div className="details-info-section">
                    <h1 className="details-title">{producto.titulo}</h1>
                    <p className="details-price">${producto.precio} COP<span className="details-tax-info">Impuesto al consumo y envío incluidos</span></p>

                    {/* Selección de talla */}
                    <div className="details-size-section">
                        <p className="details-size-title">Selecciona tu talla:</p>
                        <div className="details-size-options">
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size}
                                    className={`details-size-button ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => handleSizeSelect(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selección de cantidad */}
                    <div className="details-quantity-section">
                        <p className="details-quantity-title">Selecciona la cantidad:</p>
                        <div className="details-quantity-controls">
                            <button
                                className="details-quantity-button"
                                onClick={() => handleQuantityChange(quantity - 1)}
                            >
                                -
                            </button>
                            <span className="details-quantity-display">{quantity}</span>
                            <button
                                className="details-quantity-button"
                                onClick={() => handleQuantityChange(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Botón de añadir al carrito */}
                    <button className="details-add-to-cart">
                        <i className="bi bi-cart"></i> Añadir a la cesta
                    </button>

                    {/* Botón de comprar ahora */}
                    <button className="details-secondary-button">
                        <i className="bi bi-bag"></i> Comprar ahora
                    </button>

                    {/* Separador */}
                    <hr className="details-divider" />

                    {/* Descripción del producto */}
                    <div className="details-description">
                        <p>{producto.descripcion}</p>
                    </div>
                </div>
            </div>

            <FooterComponent />
        </>
    );
};

export default MoreDetails;
