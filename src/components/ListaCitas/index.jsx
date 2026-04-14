import "./ListaCitas.css";
import Cita from "../Cita";

function ListaCitas({ citas, setCitas }) {

    function eliminarCita(index) {
        const confirmar = confirm("¿Seguro que querés eliminar la cita?");
        if (!confirmar) return;

        const nuevasCitas = citas.filter((_, i) => i !== index);
        setCitas(nuevasCitas);
    }

    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>

            {citas.length === 0 ? (
                <p>No hay citas</p>
            ) : (
                citas.map((cita, index) => (
                    <Cita
                        key={index}
                        cita={cita}
                        eliminarCita={() => eliminarCita(index)}
                    />
                ))
            )}
        </div>
    )
}

export default ListaCitas;