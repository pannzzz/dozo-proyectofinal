import React from 'react';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';
import img1 from '../assets/img cards/camisa-rallas.png';
import img2 from '../assets/img cards/camiseta1.png';
import img3 from '../assets/img cards/short-estampado.png';
import img4 from '../assets/img cards/short.png';

const GoodsListFooter = ({ onShowMore }) => {
    return (
        <div className="add-goodsList__footer">
            <div className="moreThemesButtonArea">
                <button 
                    type="button" 
                    className="add-goodsList__more moreThemesButton" 
                    onClick={onShowMore}>
                    <span>Mostrar más</span>
                    <span style={{ marginLeft: '7px', fontSize: '18px' }}><i className="bi bi-chevron-down"></i></span>
                </button>
            </div>

            <div className="add-goodsList__info">
                <img 
                    src="https://auth.dozo-gift.com/front/v1_1/images/common/icon-toggle.svg" 
                    alt="Toggle icon"
                    className='imagen-filtro'
                />
                <div className="add-text-texto">
                    <p>
                        Puedes filtrar desde el botón de arriba.
                    </p>
                    <p>Por precio y por categoría</p>
                </div>
            </div>
        </div>
    );
};

const ProductCardComponent = () => {
    const items = [
        {
            src: img1,
            title: '#124 ¡Amantes coloridos!',
            tag: '¡¡NUEVO!!',
            price: '3,960 yenes',
            description: 'Producto que está ganando popularidad entre los amantes de la decoración colorida...',
        },
        {
            src: img2,
            title: '#122 ¿No es bueno tomárselo con calma?',
            tag: '¡¡NUEVO!!',
            price: '3,520 yenes',
            description: 'Esa persona que está programada para trabajar, estudiar y jugar...',
        },
        {
            src: img3,
            title: '#131 ¡Juega mucho! ~Sonreír~',
            tag: '¡¡NUEVO!!',
            price: '6,160 yenes',
            description: 'Un regalo divertido que será perfecto para un niño pequeño...',
        },
        {
            src: img4,
            title: '#130 ¡Juega mucho! ~Edición traviesa~',
            tag: '¡¡NUEVO!!',
            price: '6,160 yenes',
            description: 'Ideal para un niño, con un toque de diversión y creatividad...',
        },
    ];

    const handleShowMore = () => {
        console.log("Mostrar más items");
    };

    return (
        <div className="product-card-section">
            <ul className="product-card-grid">
                {items.map((item, index) => (
                    <li key={index} className="product-card">
                        <div className="imagen-container">
                            <img src={item.src} alt={item.title} className="product-imagen" />
                        </div>
                        <div className="product-card-title">{item.title}</div>
                        <div className="product-card-info">
                            <div className="add-termItem">
                                <div className="tag">{item.tag}</div>
                            </div>
                            <span className="product-card-price">{item.price}</span>
                        </div>
                        <div className="product-card-description">{item.description}</div>
                        <div className='add-goodsItem__buttonContainer'>
                            <Link to="/detalles">
                            <button className="product-card-button">Más detalles</button>
                            </Link>
                            <button 
                                className="add-cartButton js-cartBtn js-list-cartBtn" 
                                data-vid="39879430996029" 
                            ></button>
                            <button 
                                type="button" 
                                className="add-likeButton js-likeBtn theme-liked-1192" 
                                data-tid="1192" 
                                data-liked="0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.11" height="17.324" viewBox="0 0 19.11 17.324">
                                    <path d="M17.765,7.631a4.734,4.734,0,0,0-4.036-3.366,5.345,5.345,0,0,0-4.7,2.117A5.291,5.291,0,0,0,4.8,4.24,4.757,4.757,0,0,0,.387,7.346a5.487,5.487,0,0,0,1.2,5.7L8.628,20.4a.552.552,0,0,0,.794,0l7.044-7.345A5.45,5.45,0,0,0,17.765,7.631Z" transform="translate(0.536 -3.74)" fill="none" stroke="#191615" strokeWidth="1"/>
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <GoodsListFooter onShowMore={handleShowMore} />
        </div>
    );
};

export default ProductCardComponent;
