    import React from 'react';
    import '../styles/Filtro.css';

    const Filtro = ({ onClose }) => {
    return (
        <div className="add-js-searchDetailModal__box">
        <div className="add-js-searchDetailModal__inner">
            <button className="filtro-close" onClick={onClose}>×</button>
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
                        <li>
                        <button className="js-priceBtn add-searchPriceSelect__button" type="button">
                            <span className="add-icon"></span>
                            <span className="add-text">〜2,999 yenes</span>
                        </button>
                        </li>
                        <li>
                        <button className="js-priceBtn add-searchPriceSelect__button" type="button">
                            <span className="add-icon"></span>
                            <span className="add-text">De 3.000 a 4.999 yenes</span>
                        </button>
                        </li>
                        <li>
                        <button className="js-priceBtn add-searchPriceSelect__button" type="button">
                            <span className="add-icon"></span>
                            <span className="add-text">De 5.000 a 9.999 yenes</span>
                        </button>
                        </li>
                        <li>
                        <button className="js-priceBtn add-searchPriceSelect__button" type="button">
                            <span className="add-icon"></span>
                            <span className="add-text">Desde 10.000 yenes</span>
                        </button>
                        </li>
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
                        <li><a href="1" className="add-tagItem js-tagBtn">🍖 #グルメ</a></li>
                        <li><a href="2" className="add-tagItem">#コーヒー y té ☕️</a></li>
                        <li><a href="3" className="add-tagItem">♨ #趣味グッズ</a></li>
                        <li><a href="4" className="add-tagItem">💁🏻♂️ #メンズギフト</a></li>
                        <li><a href="5" className="add-tagItem">#ベビー y niños 👶</a></li>
                        <li><a href="6" className="add-tagItem">#テーブル y Cocina 🍽</a></li>
                        <li><a href="7" className="add-tagItem">🍫 #スイーツ</a></li>
                        <li><a href="8" className="add-tagItem">💄 #コスメ</a></li>
                        <li><a href="9" className="add-tagItem">#お酒 y aperitivos 🥂</a></li>
                        <li><a href="10" className="add-tagItem">🏠 #インテリア</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>

            {/* Botón para aplicar filtros */}
            <div className="add-searchDetail__submit">
                <button type="button" className="add-searchDetail__submit__button add-buttonCommon">
                <span>ver con esta condición</span>
                </button>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Filtro;
