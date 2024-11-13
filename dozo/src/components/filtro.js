import React, { useState } from 'react';
import '../styles/Filtro.css';

const Filtro = ({ onClose }) => {
    const [activePrice, setActivePrice] = useState(null);

    const handlePriceClick = (index) => {
        setActivePrice(index);
    };

    return (
        <div className="add-js-searchDetailModal__box">
            <div className="add-js-searchDetailModal__inner">
                <button className="filtro-close" onClick={onClose}>
                    <i className="bi bi-x-lg"></i>
                </button>
                <div className="add-searchDetail add-js-searchDetailAccordion">
                    <div className="add-searchDetail__themeSelected">
                        <span className="num">104</span>
                        <span className="texto">Selección de temas</span>
                    </div>
                    <div className="add-searchDetail__queries">
                        {/* Grupo de precio */}
                        <div className="add-searchDetail__group">
                            <div className="add-searchDetail__groupTitle">
                                <img src="https://auth.dozo-gift.com/front/v1_1/images/common/text/search-price.svg" alt="Precio" />
                                <span>precio</span>
                            </div>
                            <div className="add-searchDetail__groupBody">
                                <div className="add-searchPriceSelect">
                                    <ul>
                                        {['〜2,999 yenes', 'De 3.000 a 4.999 yenes', 'De 5.000 a 9.999 yenes', 'Desde 10.000 yenes'].map((price, index) => (
                                            <li key={index}>
                                                <button
                                                    className={`js-priceBtn add-searchPriceSelect__button ${activePrice === index ? 'active' : ''}`}
                                                    type="button"
                                                    onClick={() => handlePriceClick(index)}
                                                >
                                                    <span className="add-icon"></span>
                                                    <span className="add-text">{price}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Grupo de categoría */}
                        <div className="add-searchDetail__group add-is-active">
                            <div className="add-searchDetail__groupTitle" role="button">
                                <img src="https://auth.dozo-gift.com/front/v1_1/images/common/text/search-category.svg" alt="Categoría" />
                                <span>categoría</span>
                            </div>
                            <div className="add-searchDetail__groupBody">
                                <div className="add-tagList">
                                    <ul>
                                        <li><a href="1" className="add-tagItem">Camisetas</a></li>
                                        <li><a href="2" className="add-tagItem">Pantalones</a></li>
                                        <li><a href="3" className="add-tagItem">Camisas</a></li>
                                        <li><a href="4" className="add-tagItem">Accesorios</a></li>
                                        <li><a href="5" className="add-tagItem">Overoles</a></li>
                                        <li><a href="6" className="add-tagItem">Chaquetas</a></li>
                                        <li><a href="7" className="add-tagItem">Faldas</a></li>
                                        <li><a href="8" className="add-tagItem">Blusas</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Botón para aplicar filtros */}
                    <div className="botonn">
                        <button type="button" className="boton">
                            <span>ver con esta condición</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filtro;
