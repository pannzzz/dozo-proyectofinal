import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar para la navegación
import Navbar from '../components/Navbar';
import '../styles/carrito.css';

const Carrito = () => {
    const [productos, setProductos] = useState([
        {
            id: 1,
            nombre: '#77 EXPLOSIÓN AZUL',
            precio: 3300,
            cantidad: 1,
            imagen: 'https://dozo-gift.com/cdn/shop/files/th_470x470_phpyLuFHR_x190.jpg?v=1729129144',
        },
    ]);

    const [aceptarTerminos, setAceptarTerminos] = useState(false); // Estado para el checkbox
    const navigate = useNavigate(); // Hook de navegación

    const incrementarCantidad = (id) => {
        setProductos((prevProductos) =>
            prevProductos.map((producto) =>
                producto.id === id
                    ? { ...producto, cantidad: producto.cantidad + 1 }
                    : producto
            )
        );
    };

    const disminuirCantidad = (id) => {
        setProductos((prevProductos) =>
            prevProductos.map((producto) =>
                producto.id === id && producto.cantidad > 1
                    ? { ...producto, cantidad: producto.cantidad - 1 }
                    : producto
            )
        );
    };

    const eliminarProducto = (id) => {
        setProductos((prevProductos) =>
            prevProductos.filter((producto) => producto.id !== id)
        );
    };

    const subtotal = productos.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad,
        0
    );

    const handleCheckboxChange = (e) => {
        setAceptarTerminos(e.target.checked); // Cambiar el estado al marcar/desmarcar el checkbox
    };

    const handleProcederPago = () => {
        if (aceptarTerminos) {
            navigate('/pagos'); // Redirigir a la ruta /pagos
        }
    };

    return (
        <>
            <Navbar initialScrolled={true} />
            <div className="carrito-page">
                <section className="add-sectionGeneral bgw">
                    <div className="add-l-inner">
                        <h2 className="add-sectionTitle">
                            <span className="add-sectionTitle__text-03">
                                Productos en el carrito (
                                <span className="total_cnt">{productos.length}</span>{' '}
                                artículo{productos.length > 1 ? 's' : ''})
                            </span>
                        </h2>
                    </div>
                </section>

                <div className="carrito-productos">
                    {productos.map((producto) => (
                        <div key={producto.id} className="carrito-producto">
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                className="producto-imagen"
                            />
                            <div className="producto-detalle">
                                <div className="nombre">
                                    <h3>{producto.nombre}</h3>
                                    <button
                                        onClick={() => eliminarProducto(producto.id)}
                                        className="producto-eliminar"
                                    ></button>
                                </div>
                                <p>{producto.precio.toLocaleString('es-JP')} pesos</p>
                            </div>
                            <div className="producto-cantidad">
                                <button
                                    onClick={() => disminuirCantidad(producto.id)}
                                    className="menos"
                                ></button>
                                <span>{producto.cantidad}</span>
                                <button
                                    onClick={() => incrementarCantidad(producto.id)}
                                    className="mas"
                                ></button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="carrito-subtotal">
                    <p>subtotal</p>
                    <h2>$ {subtotal.toLocaleString('es-JP')}</h2>
                    <p>* Impuesto al consumo y envío del artículo incluidos</p>
                </div>

                {/* Términos y condiciones */}
                <div className="carrito-terminos">
                    <h3 className="terminos-titulo">
                        Términos de uso y manejo de la información personal
                    </h3>
                    <div className="terminos-contenedor">
                        <p>
                            <strong>Condiciones de uso</strong>
                        </p>
                        <p>
                            Estos Términos de uso se aplican al uso del sitio web de "dōzo -
                            Have fun with Gift." (en adelante, el "Sitio") operado por Daiwa
                            Co., Ltd. (en adelante, la "Compañía"). Después de aceptar el
                            contenido, registre su información y solicite productos.
                        </p>
                        <p>1. Registrador</p>
                        <p>
                            El registro de la información del cliente y de los pedidos de
                            productos y servicios debe ser realizado por el propio
                            solicitante. El registro por poder no está permitido.
                        </p>
                    </div>
                    <div className="terminos-checkbox">
                        <input
                            type="checkbox"
                            id="aceptar-terminos"
                            checked={aceptarTerminos}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="aceptar-terminos"> Aceptar</label>
                    </div>
                    <button
                        className={`proceder-pago ${aceptarTerminos ? 'activo' : ''}`}
                        disabled={!aceptarTerminos}
                        onClick={handleProcederPago}
                    >
                        Ir al procedimiento de pago
                    </button>
                </div>
            </div>
        </>
    );
};

export default Carrito;
