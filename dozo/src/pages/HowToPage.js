import React from 'react';
import '../styles/HowToPage.css';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/FooterComponent';
import howtoImage1 from '../assets/img-howto/howtouse-01.png';
import howtoImage2 from '../assets/img-howto/howtouse-02.png';
import howtoImage3 from '../assets/img-howto/howtouse-03.png';
import HowToUseicon from './../assets/howtouseicon';

const HowToPage = () => {
    return (
        <>
        <div className="how-to-page">
            <Navbar initialScrolled={true} />
            <div className="breadcrumb">
                <a href="/" className="breadcrumb-home">dōzo</a> / Iniciar sesión
            </div>

            <div className="how-to-header">
                <h3>IN YOUR STYLE</h3>
                <div className="underline"></div>
                <h1><HowToUseicon/></h1>
                <h2>Cómo usar el dozo</h2>
                <p>
                    Dozo es un servicio que permite al cliente poder
                    <span className="highlight-text"> elegir y recibir su estilo de prenda favorita</span>.
                </p>
            </div>

            <div className="how-to-steps">
                <div className="step">
                    <h4>Paso 1</h4>
                    <p>Elige una prenda en dozo</p>
                    <img src={howtoImage1} alt="Paso 1" />
                </div>

                <div className="step">
                    <h4>Paso 2</h4>
                    <p>El cliente  elige el estilo categoria</p>
                    <img src={howtoImage2} alt="Paso 2" />
                </div>

                <div className="step">
                    <h4>Paso 3</h4>
                    <p>Recibirás la prenda de tu elección</p>
                    <img src={howtoImage3} alt="Paso 3" />
                </div>
            </div>
        </div>
                    <FooterComponent />
                    </>
    );
};

export default HowToPage;
