import React, { useEffect, useState } from 'react';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';

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
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/api/productos/') // URL de la API
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
                setLoading(false);
            })
            .catch((error) => console.error('Error al cargar los productos:', error));
    }, []);

    const handleShowMore = () => {
        console.log("Mostrar más items");
    };

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className="product-card-section">
            <ul className="product-card-grid">
                {productos.map((producto) => (
                    <li key={producto.id} className="product-card">
                        <div className="imagen-container">
                        <img src={`http://localhost:8000/${producto.imagen}`} alt={producto.titulo} className="product-imagen" />


                        </div>
                        <div className="product-card-title">{producto.titulo}</div>
                        <div className="product-card-info">
                            <div className="add-termItem">
                                <div className="tag">{producto.categoria?.nombre || 'Sin categoría'}</div>
                            </div>
                            <span className="product-card-price">${producto.precio}</span>
                        </div>
                        <div className="product-card-description">{producto.descripcion}</div>
                        <div className='add-goodsItem__buttonContainer'>
                            <Link to={`/detalles/${producto.id}`}>
                                <button className="product-card-button">Más detalles</button>
                            </Link>
                            <button 
                                className="add-cartButton js-cartBtn js-list-cartBtn" 
                                data-vid={producto.id} 
                            ></button>
                            <button 
                                type="button" 
                                className="add-likeButton js-likeBtn theme-liked-1192" 
                                data-tid={producto.id} 
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
