import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";
import "./App.css";

function App() {

  const [citas, setCitas] = useState([]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <Formulario setCitas={setCitas} citas={citas}/>
          <ListaCitas citas={citas} setCitas={setCitas}/>
        </div>
      </div>
    </div>
  )
}
export default App;