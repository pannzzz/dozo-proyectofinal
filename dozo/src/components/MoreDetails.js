import React, { useState } from 'react';
import '../styles/MoreDetails.css';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/FooterComponent';

const MoreDetails = () => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= 5) {
            setQuantity(newQuantity);
        }
    };

    return (
        <>
            <Navbar initialScrolled={true} />
            {/* Breadcrumb debajo del Navbar */}

            <div className="breadcrumb-container">
                <a href="/" className="breadcrumb-more">Dozo</a> / 
                <a href="/findgift" className="breadcrumb-more"> Search</a> / Mas detalles
            </div>
            <div className="details-container">

                {/* Imagen del producto */}
                <div className="details-image-section">

                    <img
                        src="https://via.placeholder.com/500x500" // Reemplaza con la URL real de la imagen
                        alt="Detalle del producto"
                        className="details-image"
                    />
                </div>

                {/* Información del producto */}
                <div className="details-info-section">
                    <h1 className="details-title">#14 Comité de Mejora de la Calidad de Vida</h1>
                    <p className="details-price">¥14,080 <span className="details-tax-info">Impuesto al consumo y envío incluidos</span></p>

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

                    {/* Título de sección */}
                    <h2 className="details-subtitle">Regalos que puedes elegir en este dōzo</h2>

                    {/* Descripción de producto */}
                    <div className="details-description">
                        <p><b>ROSENTHAL Softspot Solar Circular S (Gris Pizarra)</b></p>
                        <ul>
                            <li>Tamaño / diámetro 12 × altura 18,5cm</li>
                            <li>Material: Plástico reciclado + China</li>
                            <li>Diseñado para uso en interiores y exteriores.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    );
};

export default MoreDetails;
