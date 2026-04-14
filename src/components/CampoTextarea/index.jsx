import "./CampoTextarea.css";

function CampoTextarea({ value, onChange }) {
  return (
    <>
      <label>Sintomas</label>
      <textarea
        name="sintomas"
        className="u-full-width"
        value={value}
        onChange={onChange}
      />
    </>
  )
}
export default CampoTextarea;