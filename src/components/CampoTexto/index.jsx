import "./CampoTexto.css";

function CampoTexto({ label, name, value, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        className="u-full-width"
        value={value}
        onChange={onChange}
      />
    </>
  )
}
export default CampoTexto;