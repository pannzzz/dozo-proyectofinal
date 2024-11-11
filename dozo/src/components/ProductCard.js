import React from 'react';
import '../styles/ProductCard.css';
import img1 from '../assets/img cards/1.png';
import img2 from '../assets/img cards/2.png';
import img3 from '../assets/img cards/3.png';
import img4 from '../assets/img cards/4.png';

const ProductCardComponent = () => {
    const items = [
        {
            src: img1,
            title: '#124 ¡Amantes coloridos!',
            tag: '¡¡NUEVO!!',
            price: '$3,960 COP',
            description: 'Producto que está ganando popularidad entre los amantes de la decoración colorida...',
        },
        {
            src: img2,
            title: '#122 ¿No es bueno tomárselo con calma?',
            tag: '¡¡NUEVO!!',
            price: '$3,520 COP',
            description: 'Esa persona que está programada para trabajar, estudiar y jugar...',
        },
        {
            src: img3,
            title: '#131 ¡Juega mucho! ~Sonreír~',
            tag: '¡¡NUEVO!!',
            price: '$6,160 COP',
            description: 'Un regalo divertido que será perfecto para un niño pequeño...',
        },
        {
            src: img4,
            title: '#130 ¡Juega mucho! ~Edición traviesa~',
            tag: '¡¡NUEVO!!',
            price: '$6,160 COP',
            description: 'Ideal para un niño, con un toque de diversión y creatividad...',
        },
    ];

    return (
        <div className="product-card-section">
            <ul className="product-card-grid">
                {items.map((item, index) => (
                    <li key={index} className="product-card">
                        <div className="image-container">
                            <img src={item.src} alt={item.title} className="product-image" />
                        </div>
                        <div className="product-card-title">{item.title}</div>
                        <div className="product-card-tag">{item.tag}</div>
                        <div className="product-card-price">{item.price}</div>
                        <div className="product-card-description">{item.description}</div>
                        <button className="product-card-button">Más detalles</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductCardComponent;
