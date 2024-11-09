import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa los estilos de Bootstrap Icons
import Logo from '../assets/logo-white.svg'; // Asegúrate de que la ruta sea correcta
import '../styles/footer.css'

const FooterComponent = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src={Logo} alt="dōzo logo" className="footer-logo-img" />
            </div>

            <div className="footer-links">
                <p>Encuentra un regalo</p>
                <p>¿Qué es el dozo?</p>
                <p>Cómo dar y recibir</p>
                <p>Inicio de sesión / Registro de nuevos miembros</p>
            </div>

            <div className="footer-icons">
                <i className="bi bi-twitter footer-icon"></i>
                <i className="bi bi-line footer-icon"></i>
                <i className="bi bi-instagram footer-icon"></i>
            </div>

            <div className="footer-info">
                <p>Preguntas frecuentes | Contáctenos | Servicios Corporativos | Política de privacidad | Términos y condiciones | Empresa Operadora | Anotación basada en la Ley de Transacciones Comerciales Especificadas</p>
            </div>

            <div className="footer-payment-methods">
                <i className="bi bi-credit-card footer-payment-icon"></i>
                <i className="bi bi-paypal footer-payment-icon"></i>
                <i className="bi bi-google wallet footer-payment-icon"></i>
                <i className="bi bi-apple footer-payment-icon"></i>
                <i className="bi bi-cash footer-payment-icon"></i>
            </div>

            <div className="footer-copyright">
                <p>©dōzo 2024</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
