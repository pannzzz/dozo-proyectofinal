import React, { useEffect, useState } from 'react';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useFilters } from './FilterContext';

const ProductCardComponent = ({ onProductCountChange }) => {
    const [productos, setProductos] = useState([]); // Todos los productos
    const [filteredProducts, setFilteredProducts] = useState([]); // Productos filtrados
    const [visibleProducts, setVisibleProducts] = useState([]); // Productos visibles
    const [loading, setLoading] = useState(true); // Estado de carga
    const [showAll, setShowAll] = useState(false); // Alternar entre mostrar más o menos productos
    const { filters, applyFilters } = useFilters(); // Filtros desde el contexto
    const { addToCart } = useCart(); // Función para añadir al carrito

    const PRODUCTS_INITIAL = 20; // Cantidad inicial de productos visibles
    const PRODUCTS_INCREMENT = 10; // Incremento de productos al mostrar más

    useEffect(() => {
        fetch('http://localhost:8000/api/productos/')
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
                setFilteredProducts(data);
                setVisibleProducts(data.slice(0, PRODUCTS_INITIAL));
                setLoading(false);
                onProductCountChange?.(data.length); // Comunicar el total de productos
            })
            .catch((error) => console.error('Error al cargar los productos:', error));
    }, [onProductCountChange]);

    useEffect(() => {
        if (filters) {
            const { min, max, category, search } = filters;
            const filtered = productos.filter((producto) => {
                const matchesPrice =
                    min !== undefined && max !== undefined
                        ? producto.precio >= min && producto.precio <= max
                        : true;
                const matchesCategory = category
                    ? producto.categoria?.nombre === category
                    : true;
                const matchesSearch = search
                    ? producto.titulo.toLowerCase().includes(search.toLowerCase())
                    : true;
                return matchesPrice && matchesCategory && matchesSearch;
            });
            setFilteredProducts(filtered);
            setVisibleProducts(filtered.slice(0, PRODUCTS_INITIAL));
            setShowAll(false);
            onProductCountChange?.(filtered.length); // Comunicar el total filtrado
        } else {
            setFilteredProducts(productos);
            setVisibleProducts(productos.slice(0, PRODUCTS_INITIAL));
            onProductCountChange?.(productos.length); // Total sin filtros
        }
    }, [filters, productos, onProductCountChange]);

    const handleToggleShow = () => {
        if (showAll) {
            setVisibleProducts(filteredProducts.slice(0, PRODUCTS_INITIAL));
            setShowAll(false);
        } else {
            const newVisibleCount = Math.min(
                visibleProducts.length + PRODUCTS_INCREMENT,
                filteredProducts.length
            );
            setVisibleProducts(filteredProducts.slice(0, newVisibleCount));
            setShowAll(newVisibleCount === filteredProducts.length);
        }
    };

    const clearFilter = (filterKey) => {
        const newFilters = { ...filters };
        delete newFilters[filterKey];
        applyFilters(newFilters);
    };

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className="product-card-section">
            <div className="applied-filters">
                {filters?.search && (
                    <li
                        className="selector_categoria"
                        onClick={() => clearFilter('search')}
                    >
                        🔍 "{filters.search}" <span className="equis">×</span>
                    </li>
                )}
                {filters?.category && (
                    <li
                        className="selector_categoria"
                        onClick={() => clearFilter('category')}
                    >
                        🏷️ {filters.category} <span className="equis">×</span>
                    </li>
                )}
                {filters?.min !== undefined && filters?.max !== undefined && (
                    <li
                        className="selector_categoria"
                        onClick={() => clearFilter('price')}
                    >
                        💰 {`De $${filters.min} a $${filters.max}`} <span className="equis">×</span>
                    </li>
                )}
            </div>
            {filteredProducts.length === 0 ? (
                <div className="no-products-message">
                    <p>No se encontraron productos que coincidan con los filtros aplicados.</p>
                </div>
            ) : (
                <>
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
                    <div className="add-goodsList__footer">
                        <div className="moreThemesButtonArea">
                            <button
                                type="button"
                                className="add-goodsList__more moreThemesButton"
                                onClick={handleToggleShow}
                            >
                                <span>{showAll ? 'Mostrar menos' : 'Mostrar más'}</span>
                                <span style={{ marginLeft: '7px', fontSize: '18px' }}>
                                    <i className={`bi bi-chevron-${showAll ? 'up' : 'down'}`}></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductCardComponent;
