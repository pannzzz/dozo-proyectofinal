import React, { useState } from 'react';
import '../styles/newsection.css';
import img1 from '../assets/img-newsection/camiseta1.png';
import img2 from '../assets/img-newsection/bolsa1.png';
import img3 from '../assets/img-newsection/short1.png';
import img4 from '../assets/img-newsection/blusa1.png';
import img5 from '../assets/img-newsection/correa1.png';
import img6 from '../assets/img-newsection/camiseta-sonic.png';
import img7 from '../assets/img-newsection/chaqueta1.png';
import img8 from '../assets/img-newsection/gafas1.png';
import WhatsNewIcon from '../assets/whatsnewicon';

const NewsSectionComponent = () => {
    const images = [
        { src: img1, title: 'Camiseta casual ideal para el día a día.', date: '2024.10.21' },
        { src: img2, title: 'Bolsa moderna y versátil para cualquier ocasión.', date: '2024.10.16' },
        { src: img3, title: 'Short fresco y cómodo, perfecto para el verano.', date: '2024.10.15' },
        { src: img4, title: 'Blusa de estilo urbano, perfecta para un look casual.', date: '2024.10.14' },
        { src: img5, title: 'Correa de cuero de alta calidad para complementar tu outfit.', date: '2024.10.13' },
        { src: img6, title: 'Camiseta de Sonic en edición limitada para los fans.', date: '2024.10.12' },
        { src: img7, title: 'Chaqueta de invierno de Sonic cálida y a la moda.', date: '2024.10.11' },
        { src: img8, title: 'Gafas de sol con diseño moderno y elegante.', date: '2024.10.10' }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('slide-in');
    const itemsPerPage = 4;
    const totalPages = Math.ceil(images.length / itemsPerPage);
    const currentPage = Math.floor(startIndex / itemsPerPage) + 1;

    const handleNext = () => {
        setAnimationClass('slide-out');
        setTimeout(() => {
            setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % images.length);
            setAnimationClass('slide-in');
        }, 600); // Duración de la animación
    };

    const handlePrev = () => {
        setAnimationClass('slide-out');
        setTimeout(() => {
            setStartIndex((prevIndex) => (prevIndex === 0 ? images.length - itemsPerPage : prevIndex - itemsPerPage));
            setAnimationClass('slide-in');
        }, 600); // Duración de la animación
    };

    const visibleImages = images.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="new-section-container">
            <div className="new-section-heading">
                <h3>IN YOUR STYLE</h3>
                <div className="underline"></div>
            </div>

            <div className="new-section-title">
                <WhatsNewIcon />
            </div>
            <p className="new-section-subtitle">Últimas novedades y prendas</p>
            <div className="new-section-slider">
                <div className="new-section-grid">
                    {visibleImages.map((image, index) => (
                        <div key={index} className={`grid-item ${animationClass}`}>
                            <span className="image-date">{image.date}</span>
                            <div className="image-container">
                                <img src={image.src} alt={`Noticia ${index + 1}`} />
                            </div>
                            <p>{image.title}</p>
                            {index < visibleImages.length - 1 && <div className="vertical-line"></div>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="add-js-articleSlider__nav">
                <button className="add-js-articleSlider__navArrow add-is-prev" onClick={handlePrev}>
                    <i className="bi bi-arrow-left-short"></i>
                </button>
                <div className="add-js-articleSlider__navNums">
                    <span data-current="">{String(currentPage).padStart(2, '0')}</span>
                    <span data-border=""></span>
                    <span data-max="">{String(totalPages).padStart(2, '0')}</span>
                </div>
                <button className="add-js-articleSlider__navArrow add-is-next" onClick={handleNext}>
                    <i className="bi bi-arrow-right-short"></i>
                </button>
            </div>
        </div>
    );
};

export default NewsSectionComponent;
