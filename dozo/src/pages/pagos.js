import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importar para recibir el estado de navegación
import '../styles/pagos.css';

const Pagos = () => {
    const { state } = useLocation(); // Obtener estado pasado desde la navegación
    const cart = state?.cart || []; // Obtener el carrito o un array vacío si no existe

    // Estado inicial del formulario, se autocompleta con la información del usuario si está disponible
    const [formData, setFormData] = useState({
        email: '',
        telefono: '',
        apellido: '',
        nombre: '',
        codigoPostal: '',
        ciudad: '',
        direccion: '',
    });

    const [errors, setErrors] = useState({});

    // Autocompletar datos del usuario al cargar el componente
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user')); // Supongamos que el usuario está almacenado en localStorage
        if (userData) {
            setFormData({
                email: userData.email || '',
                telefono: userData.telefono || '',
                apellido: userData.apellido || '',
                nombre: userData.nombre || '',
                codigoPostal: userData.codigoPostal || '',
                ciudad: userData.ciudad || '',
                direccion: userData.direccion || '',
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // Validación de correo electrónico
        if (!formData.email) {
            newErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'El formato del correo electrónico es inválido.';
        }

        // Validación de teléfono
        if (!formData.telefono) {
            newErrors.telefono = 'El número de teléfono es obligatorio.';
        } else if (!/^\d{10,15}$/.test(formData.telefono)) {
            newErrors.telefono = 'El número de teléfono debe tener entre 10 y 15 dígitos.';
        }

        // Validación de apellido y nombre
        if (!formData.apellido) newErrors.apellido = 'El apellido es obligatorio.';
        if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio.';

        // Validación de código postal
        if (!formData.codigoPostal) {
            newErrors.codigoPostal = 'El código postal es obligatorio.';
        } else if (!/^\d{3}-?\d{4}$/.test(formData.codigoPostal)) {
            newErrors.codigoPostal = 'El código postal debe ser en formato 123-4567.';
        }

        // Validación de ciudad y dirección
        if (!formData.ciudad) newErrors.ciudad = 'La ciudad es obligatoria.';
        if (!formData.direccion) newErrors.direccion = 'La dirección es obligatoria.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Formulario enviado:', formData);
            alert('Pedido confirmado correctamente');
        } else {
            alert('Por favor, corrija los errores antes de continuar.');
        }
    };

    const total = cart.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

    return (
        <div className="pagos-page">
            <div className="pagos-container">
                {/* Pago contra entrega */}
                <section className="pago-rapido">
                    <h3>Pago contra entrega</h3>
                    <p>Por favor, complete los datos de entrega para proceder con el pedido.</p>
                </section>

                {/* Contacto */}
                <section className="contacto">
                    <h3>Contacto</h3>
                    <input
                        type="email"
                        name="email"
                        placeholder="Dirección de correo electrónico"
                        className="input-contacto"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Número de teléfono"
                        className="input-telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                    {errors.telefono && <span className="error">{errors.telefono}</span>}
                </section>

                {/* Dirección de entrega */}
                <section className="direccion-facturacion">
                    <h3>Dirección de entrega</h3>
                    <form className="form-direccion" onSubmit={handleSubmit}>
                        <div className="fila">
                            <select className="select-pais">
                                <option value="colombia">Colombia</option>
                            </select>
                        </div>
                        <div className="fila">
                            <input
                                type="text"
                                name="apellido"
                                placeholder="Apellido"
                                className="input-apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                            />
                            {errors.apellido && <span className="error">{errors.apellido}</span>}
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                className="input-nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                            {errors.nombre && <span className="error">{errors.nombre}</span>}
                        </div>
                        <div className="fila">
                            <input
                                type="text"
                                name="codigoPostal"
                                placeholder="Código postal"
                                className="input-codigo-postal"
                                value={formData.codigoPostal}
                                onChange={handleChange}
                            />
                            {errors.codigoPostal && <span className="error">{errors.codigoPostal}</span>}
                        </div>
                        <div className="fila">
                            <input
                                type="text"
                                name="ciudad"
                                placeholder="Ciudad"
                                className="input-ciudad"
                                value={formData.ciudad}
                                onChange={handleChange}
                            />
                            {errors.ciudad && <span className="error">{errors.ciudad}</span>}
                        </div>
                        <div className="fila">
                            <input
                                type="text"
                                name="direccion"
                                placeholder="Dirección"
                                className="input-direccion"
                                value={formData.direccion}
                                onChange={handleChange}
                            />
                            {errors.direccion && <span className="error">{errors.direccion}</span>}
                        </div>
                        <button type="submit" className="boton-pagar">Confirmar pedido</button>
                    </form>
                </section>
            </div>

            {/* Resumen del pedido */}
            <aside className="resumen-pedido">
                {cart.map((producto) => (
                    <div key={producto.id} className="producto-resumen">
                        <img
                            src={
                                producto.imagen.startsWith('http')
                                    ? producto.imagen
                                    : `http://localhost:8000/${producto.imagen}`
                            }
                            alt={producto.titulo}
                            className="imagen-producto"
                        />
                        <div className="detalles-producto">
                            <p>{producto.titulo}</p>
                            <p>{producto.precio.toLocaleString('es-CO')} COP</p>
                        </div>
                    </div>
                ))}
                <div className="suma-total">
                    <p>Total</p>
                    <h3>$ {total.toLocaleString('es-CO')}</h3>
                </div>
            </aside>
        </div>
    );
};

export default Pagos;