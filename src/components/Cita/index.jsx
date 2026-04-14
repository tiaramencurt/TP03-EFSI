import "./Cita.css";
import Boton from "../Boton";

function Cita({ cita, eliminarCita }) {
return(
<div className="cita">
<p>
Mascota:
<span> {cita.mascota}</span>
</p>
<p>
Dueño:
<span> {cita.dueno}</span>
</p>
<p>
Fecha:
<span> {cita.fecha}</span>
</p>
<p>
Hora:
<span> {cita.hora}</span>
</p>
<p>
Sintomas:
<span> {cita.sintomas}</span>
</p>

<Boton texto="Eliminar x" tipo="eliminar" onClick={eliminarCita}/>

</div>
)
}
export default Cita;