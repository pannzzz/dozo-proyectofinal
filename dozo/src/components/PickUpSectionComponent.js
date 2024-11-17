import React, { useState } from 'react';
import '../styles/pickupsection.css';
import img1 from '../assets/img-pick/anillo-pezcoy.png';
import img2 from '../assets/img-pick/bolso-cafe-estrella.png';
import img3 from '../assets/img-pick/bolso2.png';
import img4 from '../assets/img-pick/camisa-lineas-colores.png';
import img5 from '../assets/img-pick/camiseta-espiral.png';
import img6 from '../assets/img-pick/gorro.png';
import img7 from '../assets/img-pick/medias-pato.png';
import img8 from '../assets/img-pick/pantalon-cafeyazul.png';
import img9 from '../assets/img-pick/pantalon-fenix.png';
import img10 from '../assets/img-pick/short-medio.png';
import img11 from '../assets/img-pick/short2.png';
import img12 from '../assets/img-pick/sueter-estrella.png';
import { Link } from 'react-router-dom';


import PickupIcon from '../assets/pickupicon';

const PickUpSectionComponent = () => {
    // Definimos los ítems para cada página
    const items = [
        // Página 1
        {
            src: img1,
            title: '#122 ¿No es bueno tomárselo con calma?',
            tag: '¡¡NUEVO!!',
            price: '$3.520 COP',
            description: 'Esa persona que está programada para trabajar, estudiar y jugar...',
        },
        {
            src: img2,
            title: '#123 Abrázate a ti mismo.',
            tag: '¡¡NUEVO!!',
            price: '$3.960 COP',
            description: 'Un regalo de amor propio que es inquebrantablemente popular en dózo...',
        },
        {
            src: img3,
            title: '#125 Club de la Hora del Té',
            tag: '¡¡NUEVO!!',
            price: '$5.170 COP',
            description: 'Hablando de té, es un regalo clásico, pero de eso se trata Dózo...',
        },
        {
            src: img4,
            title: '#32 Kanpai en tus ojos',
            tag: 'Top venta',
            price: '$6.160 COP',
            description: 'Salud, sólo leer esta carta lo hace divertido. ¡Renacimiento desde algún lugar!',
        },
        // Página 2
        {
            src: img5,
            title: '#133 Disfruta el momento',
            tag: 'Destacado',
            price: '$4.500 COP',
            description: 'Un recordatorio de que cada momento es único...',
        },
        {
            src: img6,
            title: '#134 Serenidad y calma',
            tag: 'Nuevo',
            price: '$5.000 COP',
            description: 'Productos que te ayudarán a encontrar tu paz interior...',
        },
        {
            src: img7,
            title: '#135 Inspiración diaria',
            tag: 'Top venta',
            price: '$5.800 COP',
            description: 'Ideas y productos para mantenerte inspirado cada día...',
        },
        {
            src: img8,
            title: '#136 Belleza natural',
            tag: 'Eco-friendly',
            price: '$6.300 COP',
            description: 'Cuidando el medio ambiente mientras disfrutas de productos únicos...',
        },
        // Repetimos la página 1 para la página 3 y 4
        {
            src: img9,
            title: '#122 ¿No es bueno tomárselo con calma?',
            tag: '¡¡NUEVO!!',
            price: '$3.520 COP',
            description: 'Esa persona que está programada para trabajar, estudiar y jugar...',
        },
        {
            src: img10,
            title: '#123 Abrázate a ti mismo.',
            tag: '¡¡NUEVO!!',
            price: '$3.960 COP',
            description: 'Un regalo de amor propio que es inquebrantablemente popular en dózo...',
        },
        {
            src: img11,
            title: '#125 Club de la Hora del Té',
            tag: '¡¡NUEVO!!',
            price: '$5.170 COP',
            description: 'Hablando de té, es un regalo clásico, pero de eso se trata Dózo...',
        },
        {
            src: img12,
            title: '#32 Kanpai en tus ojos',
            tag: 'Top venta',
            price: '$6.160 COP',
            description: 'Salud, sólo leer esta carta lo hace divertido. ¡Renacimiento desde algún lugar!',
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [animationClass, setAnimationClass] = useState('');
    const itemsPerPage = 4;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleNext = () => {
        setAnimationClass('slide-out-left');
        setTimeout(() => {
            setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
            setAnimationClass('slide-in-right');
        }, 500); 
    };

    const handlePrev = () => {
        setAnimationClass('slide-out-right');
        setTimeout(() => {
            setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
            setAnimationClass('slide-in-left');
        }, 500);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="pickup-section-container">
            <div className="gift-story-header">
                <p>IN YOUR STYLE</p>
                <div className="underline"></div>
                <PickupIcon />
            </div>
            <p className="pickup-subtitle">¡Este es el mejor dozo del mes!</p>

            <ul className="pickup-grid">
                {visibleItems.map((item, index) => (
                    <li key={index} className={`pickup-item ${animationClass}`}>
                        <div className="image-container">
                            <img src={item.src} alt={`Item ${index + 1}`} className="pickup-image" />
                        </div>
                        <div className="pickup-item-title">{item.title}</div>
                        <div className="pickup-item-tag">{item.tag}</div>
                        <div className="pickup-item-price">{item.price}</div>
                        <div className="pickup-item-description">{item.description}</div>
                        <Link to="/detalles">
                        <button className="pickup-button">Más detalles</button>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="pickup-navigation">
                <button className="pickup-nav-button" onClick={handlePrev}>
                    <i className="bi bi-arrow-left-short"></i>
                </button>
                <span className="pickup-page-indicator">
                    {String(currentPage).padStart(2, '0')} — {String(totalPages).padStart(2, '0')}
                </span>
                <button className="pickup-nav-button" onClick={handleNext}>
                    <i className="bi bi-arrow-right-short"></i>
                </button>
            </div>
        </div>
    );
};

export default PickUpSectionComponent;