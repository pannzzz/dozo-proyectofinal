import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import searchIcon from '../assets/icons/ic-search.svg';
import filterIcon from '../assets/icons/icon-toggle.svg';
import newIcon from '../assets/icons/icon-sort-new.png';
import BuscarIcon from '../assets/icons/search';
import '../styles/FindGiftPage.css';
import Card from '../components/ProductCard';

const FindGiftPage = () => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    const toggleFilterModal = () => {
        setIsFilterModalOpen(!isFilterModalOpen);
    };

    return (
        <>
            <Navbar initialScrolled={true} />
            <div className="find-gift-page">
                <div className="sub-navbar">
                    <h2><span className="number-text">104</span> tema</h2>
                    <div className="sub-navbar-actions">
                        <form className="sub-search-form">
                            <button type="submit" className="sub-search-button">
                                <img src={searchIcon} alt="Buscar" className="search-icon" />
                            </button>
                            <input type="text" placeholder="Búsqueda por palabra clave" />
                        </form>
                        <button className="sub-action-button" onClick={toggleFilterModal}>
                            <img src={filterIcon} alt="Filtrar" className="filter-icon" />
                        </button>
                        <button className="sub-action-button new-button">
                            <img src={newIcon} alt="Nuevo" className="new-icon" />
                        </button>
                    </div>
                </div>

                {isFilterModalOpen && (
                    <div className="filter-modal">
                        <button className="close-modal" onClick={toggleFilterModal}>×</button>
                        <h2>104 Selección de temas</h2>
                        <div className="filter-content">
                            <div className="filter-section">
                                <h3>Price</h3>
                                <span>precio</span>
                                {/* Aquí puedes añadir controles para el rango de precios */}
                            </div>
                            <div className="filter-section">
                                <h3>Scene</h3>
                                <span>escena</span>
                                {/* Aquí puedes añadir opciones de escena */}
                            </div>
                            <div className="filter-section">
                                <h3>Feeling</h3>
                                <span>humor</span>
                                {/* Aquí puedes añadir opciones de sentimiento */}
                            </div>
                            <div className="filter-section">
                                <h3>Category</h3>
                                <span>categoría</span>
                                {/* Aquí puedes añadir categorías con etiquetas */}
                            </div>
                        </div>
                        <button className="apply-filter-button">Exprimir por esta condición</button>
                    </div>
                )}

                <div className="content">
                    <a href="/" className="breadcrumb-find">Dozo</a> / Encuentra un regalo
                    <h2>IN YOUR STYLE</h2>
                    <div className="underline1"></div>
                    <h1><BuscarIcon /></h1>
                </div>
                <Card />
            </div>
        </>
    );
};

export default FindGiftPage;
