import "./App.css";
import Boton from "./componentes/Boton";
/*esta vez para mostrar una imagen vamos a usar import*/
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {

  /*usamos hook, la funcion useState nos permite agrgar un estado a un componente funcional*/ 
  /*la funcion set.... nos permite acualizarlo*/
  const [numClics, setNumClics] = useState(0);
/*con la funcion flecha =>, es importante y le estamos efiniendo a una constante"manejarClic", 
tenemos los parentesis con los parametros y nos va a retornar lo que esta entre llaves*/
  const manejarClic = () => {
/*con console.log, solo es para ir comprobando que lo que hacemos nos lo devuelve por la consola*/ 
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freeCodeCamp"/>
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics}/>
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />

      </div>
      
    </div>
  );
}

export default App;
