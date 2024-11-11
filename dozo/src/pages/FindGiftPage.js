import React from 'react';
import Navbar from '../components/Navbar';
import searchIcon from '../assets/icons/ic-search.svg'; // Ícono de búsqueda como imagen
import filterIcon from '../assets/icons/icon-toggle.svg'; // Ícono de filtro como imagen
import newIcon from '../assets/icons/icon-sort-new.png'; // Ícono de "New!" como imagen
import BuscarIcon from '../assets/icons/search'; // Importa el ícono de "Buscar" como componente
import '../styles/FindGiftPage.css';

const FindGiftPage = () => {
    return (
        <>
                    {/* Navbar principal */}
                    <Navbar initialScrolled={true} />
        <div className="find-gift-page">
            {/* Segundo Navbar con la información adicional */}
            <div className="sub-navbar">
                <h2><span className="number-text">104</span> tema</h2>
                <div className="sub-navbar-actions">
                    <form className="sub-search-form">
                        <button type="submit" className="sub-search-button">
                            <img src={searchIcon} alt="Buscar" className="search-icon" />
                        </button>
                        <input type="text" placeholder="Búsqueda por palabra clave" />
                    </form>
                    <button className="sub-action-button">
                        <img src={filterIcon} alt="Filtrar" className="filter-icon" />
                    </button>
                    <button className="sub-action-button new-button">
                        <img src={newIcon} alt="Nuevo" className="new-icon" />
                    </button>
                </div>
                
            </div>

            <div className="content">
            {/* Breadcrumb y contenido principal */}
                <a href="/" className="breadcrumb-find">dōzo</a> / Encuentra un regalo
                <h2>IN YOUR STYLE</h2>
                <div className="underline1"></div>
                <h1><BuscarIcon /></h1>
            </div>
        </div>
        </>
    );
};

export default FindGiftPage;
