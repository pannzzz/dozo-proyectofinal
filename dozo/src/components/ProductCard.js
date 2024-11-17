import React, { useEffect, useState } from 'react';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const GoodsListFooter = ({ onToggleShow, showAll }) => {
    return (
        <div className="add-goodsList__footer">
            <div className="moreThemesButtonArea">
                <button
                    type="button"
                    className="add-goodsList__more moreThemesButton"
                    onClick={onToggleShow}
                >
                    <span>{showAll ? 'Mostrar menos' : 'Mostrar más'}</span>
                    <span style={{ marginLeft: '7px', fontSize: '18px' }}>
                        <i className={`bi bi-chevron-${showAll ? 'up' : 'down'}`}></i>
                    </span>
                </button>
            </div>

            <div className="add-goodsList__info">
                <img
                    src="https://auth.dozo-gift.com/front/v1_1/images/common/icon-toggle.svg"
                    alt="Toggle icon"
                    className="imagen-filtro"
                />
                <div className="add-text-texto">
                    <p>Puedes filtrar desde el botón de arriba.</p>
                    <p>Por precio y por categoría</p>
                </div>
            </div>
        </div>
    );
};

const ProductCardComponent = () => {
    const [productos, setProductos] = useState([]); // Todos los productos
    const [visibleProducts, setVisibleProducts] = useState([]); // Productos visibles
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false); // Estado para alternar entre mostrar más o menos
    const { addToCart } = useCart();

    const PRODUCTS_INITIAL = 20;
    const PRODUCTS_INCREMENT = 10;

    useEffect(() => {
        fetch('http://localhost:8000/api/productos/') // URL de la API
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
                setVisibleProducts(data.slice(0, PRODUCTS_INITIAL)); // Mostrar los primeros 30 productos
                setLoading(false);
            })
            .catch((error) => console.error('Error al cargar los productos:', error));
    }, []);

    const handleToggleShow = () => {
        if (showAll) {
            const currentVisibleCount = visibleProducts.length;
            const newVisibleCount = Math.max(currentVisibleCount - PRODUCTS_INCREMENT, PRODUCTS_INITIAL);
            setVisibleProducts(productos.slice(0, newVisibleCount)); // Reducir los productos visibles
            if (newVisibleCount === PRODUCTS_INITIAL) {
                setShowAll(false);
            }
        } else {
            const currentVisibleCount = visibleProducts.length;
            const newVisibleCount = Math.min(currentVisibleCount + PRODUCTS_INCREMENT, productos.length);
            setVisibleProducts(productos.slice(0, newVisibleCount)); // Aumentar los productos visibles
            if (newVisibleCount === productos.length) {
                setShowAll(true);
            }
        }
    };

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className="product-card-section">
            <ul className="product-card-grid">
                {visibleProducts.map((producto) => (
                    <li key={producto.id} className="product-card">
                        <div className="imagen-container">
                            <img
                                src={`http://localhost:8000/${producto.imagen}`}
                                alt={producto.titulo}
                                className="product-imagen"
                            />
                        </div>
                        <div className="product-card-title">{producto.titulo}</div>
                        <div className="product-card-info">
                            <div className="add-termItem">
                                <div className="tag">{producto.categoria?.nombre || 'Sin categoría'}</div>
                            </div>
                            <span className="product-card-price">${producto.precio} COP</span>
                        </div>
                        <div className="product-card-description">{producto.descripcion}</div>
                        <div className="add-goodsItem__buttonContainer">
                            <Link to={`/detalles/${producto.id}`}>
                                <button className="product-card-button">Más detalles</button>
                            </Link>
                            <button
                                className="add-cartButton js-cartBtn js-list-cartBtn"
                                onClick={() => addToCart(producto)}
                            >
                                <i className="bi bi-cart"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <GoodsListFooter onToggleShow={handleToggleShow} showAll={showAll} />
        </div>
    );
};

export default ProductCardComponent;
