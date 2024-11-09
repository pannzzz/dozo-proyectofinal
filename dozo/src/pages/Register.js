import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Register.css';

const Register = () => {
    return (
        <>
            <Navbar initialScrolled={true} />
            <div className="login-container">
                <div className="breadcrumb">
                    <a href="/" className="breadcrumb-home">dōzo</a> / Registro de clientes
                </div>
            </div>
            <div className="register-container">
                <h2>Registro de nuevos miembros</h2>
                <p>¡Aquellos que se registren como miembros en LINE recibirán un cupón de descuento de 500 yenes que se puede usar de inmediato!</p>
            </div>
        </>
    );
};
export default Register;