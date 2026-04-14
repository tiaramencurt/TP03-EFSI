import "./Boton.css";

function Boton({texto, tipo, onClick}) {
  return(
    <button 
      className={`u-full-width button ${tipo}`}
      onClick={onClick}
    >
      {texto}
    </button>
  )
}

export default Boton;