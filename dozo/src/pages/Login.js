// src/pages/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Login.css';
import FooterComponent from '../components/FooterComponent';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate(); // Hook para redirección

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validar campos vacíos
        if (!email || !password) {
            setShowError(true);
        } else {
            setShowError(false);
            // Lógica de inicio de sesión
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register'); // Redirige a la página de registro
    };

    return (
        <>
            <Navbar initialScrolled={true} />
            <div className="login-container">
                <div className="breadcrumb">
                    <a href="/" className="breadcrumb-home">Dozo</a> / Iniciar sesión
                </div>
                
                {/* Contenedor escalado */}
                <div className="scaled-content">
                    <div className="login-box">
                        <h2>Iniciar sesión</h2>
                        {showError && (
                            <div className="error-message">
                                <strong>Hay un problema con el contenido de entrada. Por favor, compruébalo.</strong>
                                <p>Correo electrónico o contraseña incorrectos.</p>
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="email" 
                                placeholder="Dirección de correo electrónico" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                type="password" 
                                placeholder="Contraseña" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit" className="login-button">Iniciar sesión</button>
                            <p className="forgot-password">¿Olvidaste tu contraseña?</p>
                        </form>
                    </div>
                    <div className="separator"></div>
                    <div className="new-user-box">
                        <h3>Para quienes visitan por primera vez</h3>
                        <p>¡Aquellos que se registren como<br/>
                        miembros en LINE recibirán<br/>
                        un cupón de descuento de 500 <br/>
                        yenes que se puede usar <br/>
                        de inmediato!</p>
                        <button className="new-user-button" onClick={handleRegisterRedirect}>
                            Registro de nuevos miembros
                        </button>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    );
};

export default Login;