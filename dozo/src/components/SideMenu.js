    // src/components/SideMenu.js
    import React from 'react';
    import '../styles/SideMenu.css';

    const SideMenu = ({ closeMenu }) => {
    return (
        <>
        {/* Overlay semitransparente que oscurece el fondo */}
        <div className="menu-overlay" onClick={closeMenu}></div>
        
        {/* Menú lateral */}
        <div className="side-menu">
            <button className="close-button" onClick={closeMenu}>✕</button>
            <ul>
            <li><a href="/#">Encuentra un regalo</a></li>
            <li><a href="/#">¿Qué es el dozo?</a></li>
            <li><a href="/#">Cómo dar y recibir dozo</a></li>
            <li><a href="/#">Leer la revista</a></li>
            <li><a href="/#">Ver Illustrator</a></li>
            <li><a href="/#">Iniciar sesión</a></li>
            <li><a href="/#">Registro de nuevos miembros</a></li>
            <li><a href="/#">Dónde comprar</a></li>
            <li><a href="/#">Servicios corporativos</a></li>
            <li><a href="/#">Preguntas frecuentes</a></li>
            <li><a href="/#">Contáctenos</a></li>
            </ul>
            <div className="side-menu-icons">
            <i className="fab fa-xing"></i>
            <i className="fab fa-line"></i>
            <i className="fab fa-instagram"></i>
            </div>
        </div>
        </>
    );
    };

    export default SideMenu;
