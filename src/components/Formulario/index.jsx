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

  function handleChange(e) {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // agregar cita
    setCitas([...citas, cita]);

    // resetear form
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
      <form onSubmit={handleSubmit}>

        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" onChange={handleChange} value={cita.mascota}/>

        <label>Nombre Dueño</label>
        <input type="text" name="dueno" className="u-full-width" onChange={handleChange} value={cita.dueno}/>

        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" onChange={handleChange} value={cita.fecha}/>

        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" onChange={handleChange} value={cita.hora}/>

        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width" onChange={handleChange} value={cita.sintomas}/>

        <Boton texto="Agregar Cita" tipo="primary"/>

      </form>
    </div>
  )
}

export default Formulario;