import React, { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
import Text from './Text';
import MovingBanner from './MovingBanner';
import '../styles/Navbar.css';
import cartIcon from '../assets/icons/icon-cart.svg';
import logo from '../assets/logo.svg';

const Navbar = ({ initialScrolled = false }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(initialScrolled);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(initialScrolled); // Mantener estado inicial según la prop
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [initialScrolled]);

    let navbarClasses = ['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    return (
        <div className="navbar-container">
            {/* Moving Banner Naranja */}
            <MovingBanner />

            {/* Navbar principal */}
            <div className={navbarClasses.join(' ')}>
                {/* Sección izquierda con logo */}
                <div className="navbar-left">
                    {scrolled ? (
                        <img src={logo} alt="logo" className="navbar-logo-left" />
                    ) : (
                        <Text />
                    )}
                </div>

                {/* Sección central con el logo (si no está scrolled) */}
                {!scrolled && (
                    <div className="navbar-center">
                        <img src={logo} alt="logo" className="navbar-logo" />
                    </div>
                )}

                {/* Sección derecha con búsqueda, iniciar sesión, carrito y menú */}
                <div className="navbar-right">
                    <form className="search-form">
                        <button type="submit" className="search-button">
                            <i className="bi bi-search"></i>
                        </button>
                        <input type="text" placeholder="Encuentra un regalo" />
                    </form>

                    <a href="/login" className="login-link">INICIAR SESIÓN</a>

                    <div className="cart">
                        <img src={cartIcon} alt="Carrito de compras" className="cart-icon" />
                        <span className="cart-count">0</span>
                    </div>

                    <button className="menu-icon" onClick={toggleMenu}>
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </div>

            {menuOpen && <SideMenu closeMenu={toggleMenu} />}
        </div>
    );
};

export default Navbar;
