import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importar Bootstrap Icons
import '../styles/SideMenu.css';

const SideMenu = ({ closeMenu }) => {
    const [isGiftMenuOpen, setIsGiftMenuOpen] = useState(false);

    const toggleGiftMenu = () => {
        setIsGiftMenuOpen(!isGiftMenuOpen);
    };

    return (
        <>
            <div className="menu-overlay" onClick={closeMenu}></div>
            
            <div className="side-menu">
                <button className="close-button" onClick={closeMenu}>✕</button>
                <ul className="main-menu">
                    <li>
                        <div className="menu-item" onClick={toggleGiftMenu}>
                            <i className="bi bi-search menu-icon"></i>
                            <span>Encuentra un estilo</span>
                            <i className={`bi ${isGiftMenuOpen ? 'bi-chevron-down' : 'bi-chevron-right'} arrow`}></i>
                        </div>
                        <div className={`submenu ${isGiftMenuOpen ? 'open' : ''}`}>
                            <div className="search-bar">
                                <input type="text" placeholder="Búsqueda por palabra clave" />
                            </div>
                            <ul className="price-range">
                                <li><a href="/#">Ver todos las categorias</a></li>
                                <li><a href="/#">~29999cop</a></li>
                                <li><a href="/#">30000~40000 cop</a></li>
                                <li><a href="/#">50000~99999 cop</a></li>
                                <li><a href="/#">100000 cop~</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/about">
                            <i className="bi bi-question-circle menu-icon"></i>
                            ¿Qué es el dōzo?<i className="bi bi-chevron-right arrow"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/howto">
                            <i className="bi bi-gift menu-icon"></i>
                            Cómo usar dōzo<i className="bi bi-chevron-right arrow"></i>
                        </a>
                    </li>
                </ul>
                <ul className="secondary-menu">
                    <li><a href="/login">Iniciar sesión</a></li>
                    <li><a href="/register">Registro de nuevos miembros</a></li>
                </ul>
            </div>
        </>
    );
};

export default SideMenu;
