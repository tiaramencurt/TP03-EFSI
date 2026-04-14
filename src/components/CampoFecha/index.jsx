import "./CampoFecha.css";

function CampoFecha({ value, onChange }) {
  return (
    <>
      <label>Fecha</label>
      <input
        type="date"
        name="fecha"
        className="u-full-width"
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default CampoFecha;