import React from "react";
import "../hojas-de-estilo/Boton.css";

/*de esta forma no hace falta escribir props.texto, vasta con poner entre {} la palbraa la que nos vallamos a referir a esto se le llama desestruracion*/ 
function Boton({ texto, esBotonDeClic, manejarClic }) {
  return(
    <button
    /*vamos a usar un operador ternario, toma decisiones en vase a otro valor, es como un condicional, usamos {} por ser un operador de javascrip*/
    className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      /*esto se le llama Event Listener*/
      onClick={manejarClic}>
      {texto}
    </button>
  );

}

export default Boton