import "./CampoHora.css";

function CampoHora({ value, onChange }) {
  return (
    <>
      <label>Hora</label>
      <input
        type="time"
        name="hora"
        className="u-full-width"
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default CampoHora;