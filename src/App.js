import React, { useState, useEffect } from "react";
import Imagenes from "./Components/imagenes";
function App() {
  const [datos, setDatos]= useState([]);
  const ACCESS_POINT="https://rickandmortyapi.com/api/character";
  const get_datos = (url) =>{
    fetch(url)
    .then(data => {
      return data.json();
    })
    .then(data => {
      setDatos(data.results)
    })
    .catch(error => {
      console.log(error);
    })
  }

  useEffect (()=>{
    get_datos(ACCESS_POINT);
  }, [])
  return (
<div>
  <Imagenes datos ={datos}/>
</div>
  );
}

export default App;
