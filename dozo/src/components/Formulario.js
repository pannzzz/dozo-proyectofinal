import React, { useState, useEffect } from 'react';
import '../styles/Formulario.css';

const Formulario = () => {
    const [formData, setFormData] = useState({
        correo: '',
        contraseña: '',
        nombre: '',
        apellido: '',
        departamento: '',
        ciudad: '',
        direccion: '',
        codigoPostal: ''
    });

    const [errors, setErrors] = useState({});
    const [departamentos, setDepartamentos] = useState([]);
    const [ciudades, setCiudades] = useState([]);

    useEffect(() => {
        // Obtener la lista de departamentos al cargar el componente
        fetch('https://api-colombia.com/api/v1/Department')
            .then(response => response.json())
            .then(data => {
                setDepartamentos(data || []); // Asegura que 'data' sea un array
            })
            .catch(error => {
                console.error('Error al obtener departamentos:', error);
                setDepartamentos([]); // Si hay error, establece departamentos como lista vacía
            });
    }, []);

    useEffect(() => {
        // Obtener las ciudades del departamento seleccionado
        if (formData.departamento) {
            const departamentoSeleccionado = departamentos.find(
                depto => depto.name === formData.departamento
            );
            if (departamentoSeleccionado && departamentoSeleccionado.id) {
                // Realiza una solicitud para obtener las ciudades del departamento seleccionado
                fetch(`https://api-colombia.com/api/v1/Department/${departamentoSeleccionado.id}/cities`)
                    .then(response => response.json())
                    .then(data => {
                        setCiudades(data || []); // Asegura que 'data' sea un array
                    })
                    .catch(error => {
                        console.error('Error al obtener ciudades:', error);
                        setCiudades([]); // Si hay error, establece ciudades como lista vacía
                    });
            } else {
                setCiudades([]); // Si no hay un departamento seleccionado, establece ciudades como lista vacía
            }
        } else {
            setCiudades([]); // Si no hay departamento, limpia las ciudades
        }
    }, [formData.departamento, departamentos]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.correo) newErrors.correo = "El correo es obligatorio";
        else if (!/\S+@\S+\.\S+/.test(formData.correo)) newErrors.correo = "Ingrese un correo válido";

        if (!formData.contraseña) newErrors.contraseña = "La contraseña es obligatoria";
        else if (formData.contraseña.length < 8) newErrors.contraseña = "La contraseña debe tener al menos 8 caracteres";

        if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio";

        if (!formData.apellido) newErrors.apellido = "El apellido es obligatorio";

        if (!formData.departamento) newErrors.departamento = "El departamento es obligatorio";

        if (!formData.ciudad) newErrors.ciudad = "La ciudad es obligatoria";

        if (!formData.direccion) newErrors.direccion = "La dirección es obligatoria";

        if (!formData.codigoPostal) newErrors.codigoPostal = "El código postal es obligatorio";
        else if (!/^\d{5}$/.test(formData.codigoPostal)) newErrors.codigoPostal = "Ingrese un código postal válido (5 dígitos)";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Formulario enviado correctamente");
            // Aquí puedes enviar los datos al servidor o manejar la lógica de envío
        }
    };

    return (
        <div className="con_form">
            <div className="box_st text-center" id="frm_form">
                <h2 className="font-normal sm:text-16 md:text-18">Ingrese los siguientes elementos y proceda con el registro de membresía.</h2>
                <p className="font-normal txt sm:text-13 md:text-13">El elemento "<em>*</em>" es un campo obligatorio</p>
            </div>

            <form onSubmit={handleSubmit} className="box_form">
                <div className="item">
                    <label className="caption">Correo electrónico*</label>
                    <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        className="frm"
                    />
                    {errors.correo && <p className="error-message">{errors.correo}</p>}
                </div>
                <div className="item">
                    <label className="caption">Contraseña*</label>
                    <input
                        type="password"
                        name="contraseña"
                        value={formData.contraseña}
                        onChange={handleChange}
                        className="frm"
                    />
                    {errors.contraseña && <p className="error-message">{errors.contraseña}</p>}
                </div>
                <div className="item">
                    <label className="caption">Nombre*</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="frm"
                    />
                    {errors.nombre && <p className="error-message">{errors.nombre}</p>}
                </div>
                <div className="item">
                    <label className="caption">Apellido*</label>
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        className="frm"
                    />
                    {errors.apellido && <p className="error-message">{errors.apellido}</p>}
                </div>
                <div className="item">
                    <label className="caption">Departamento*</label>
                    <select
                        name="departamento"
                        value={formData.departamento}
                        onChange={handleChange}
                        className="frm"
                    >
                        <option value="">Seleccione un departamento</option>
                        {departamentos.map(depto => (
                            <option key={depto.id} value={depto.name}>
                                {depto.name}
                            </option>
                        ))}
                    </select>
                    {errors.departamento && <p className="error-message">{errors.departamento}</p>}
                </div>
                <div className="item">
                    <label className="caption">Ciudad*</label>
                    <select
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleChange}
                        className="frm"
                        disabled={!formData.departamento}
                    >
                        <option value="">Seleccione una ciudad</option>
                        {ciudades.map(ciudad => (
                            <option key={ciudad.id} value={ciudad.name}>
                                {ciudad.name}
                            </option>
                        ))}
                    </select>
                    {errors.ciudad && <p className="error-message">{errors.ciudad}</p>}
                </div>
                <div className="item">
                    <label className="caption">Dirección*</label>
                    <input
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                        className="frm"
                    />
                    {errors.direccion && <p className="error-message">{errors.direccion}</p>}
                </div>
                <div className="item">
                    <label className="caption">Código Postal*</label>
                    <input
                        type="text"
                        name="codigoPostal"
                        value={formData.codigoPostal}
                        onChange={handleChange}
                        className="frm"
                    />
                    {errors.codigoPostal && <p className="error-message">{errors.codigoPostal}</p>}
                </div>
                <div className="box_action">
                    <button type="submit" className="btn_submit">Registrarse</button>
                </div>
            </form>
        </div>
    );
};

export default Formulario;
