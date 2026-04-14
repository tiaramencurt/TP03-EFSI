import "./Formulario.css";
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

  function handleChange(e) {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // VALIDACIÓN
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

    // AGREGAR CITA
    setCitas([...citas, cita]);

    // RESET
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

      {error && <p className="alerta-error">Todos los campos son obligatorios</p>}

      <form onSubmit={handleSubmit}>

        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          onChange={handleChange}
          value={cita.mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="dueno"
          className="u-full-width"
          onChange={handleChange}
          value={cita.dueno}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={cita.fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={cita.hora}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={cita.sintomas}
        />

        <Boton texto="Agregar Cita" tipo="primary"/>

      </form>
    </div>
  )
}

export default Formulario;