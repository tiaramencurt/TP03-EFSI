import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import CampoFecha from "../CampoFecha";
import CampoHora from "../CampoHora";
import CampoTextarea from "../CampoTextarea";
import Boton from "../Boton";
import { useState } from "react";

function Formulario({ setCitas, citas }) {
    const [cita, setCita] = useState({
        mascota: "",
        dueno: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });
    const [error, setError] = useState(false);

    function Actualizar(evento) {
        setCita({ ...cita, [evento.target.name]: evento.target.value });
    }

    function Validar(evento) {
        evento.preventDefault();
        if (
            cita.mascota.trim() === "" ||
            cita.dueno.trim() === "" ||
            cita.fecha.trim() === "" ||
            cita.hora.trim() === "" ||
            cita.sintomas.trim() === ""
        ) {
            setError(true);
            return;
        }

        setError(false);

        setCitas([...citas, cita]);

        setCita({
            mascota: "",
            dueno: "",
            fecha: "",
            hora: "",
            sintomas: ""
        });
    }

    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            {error && <p className="alerta-error">Completá todos los campos</p>}
            <form onSubmit={Validar}>
                <CampoTexto
                    label="Nombre Mascota"
                    name="mascota"
                    value={cita.mascota}
                    onChange={Actualizar}
                />
                <CampoTexto
                    label="Nombre Dueño"
                    name="dueno"
                    value={cita.dueno}
                    onChange={Actualizar}
                />
                <CampoFecha
                    value={cita.fecha}
                    onChange={Actualizar}
                />
                <CampoHora
                    value={cita.hora}
                    onChange={Actualizar}
                />
                <CampoTextarea
                    value={cita.sintomas}
                    onChange={Actualizar}
                />
                <Boton texto="Agregar Cita" tipo="primary" />
            </form>
        </div>
    )
}

export default Formulario;