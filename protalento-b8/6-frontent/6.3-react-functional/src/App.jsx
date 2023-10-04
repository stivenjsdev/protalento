import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')
  const [resultado, setResultado] = useState(0)

  /* 
  CORRECTO:
  const [count, setCount] = useState(0)
  INCORRECTO!!!!!
  let count = 0
  const sumar = () =>{
    count++
  }

  */

  const handleInput = (evt) => {
    // alert("Cambia")
    const input = evt.target // Recupera el input type=text
    setNombre(input.value) // Esto es como si tuvieramos nombre = input.value (PERO NO ES IGUAL)
    console.log(input.value)
  }

  const saludar = () =>{
    alert("Hola")
  }

  const sumar = ()=>{
    const x =  parseInt(document.querySelector("[name=x]").value)
    const y = parseInt(document.querySelector("[name=y]").value)
    setResultado(x+y)
  }

  return (
    <>
      <h1>Hola {nombre}</h1>
      <input type="text" id="nombre" onChange={handleInput}></input>
      <button onClick={saludar}>Enviar</button>
      <div>
        <h2>Otro ejemplo</h2>
        <input type="number" name="x" onChange={sumar}/>&nbsp;
        <input type="number" name="y" onChange={sumar}/>&nbsp;
        <button onClick={sumar}>Sumar</button>
        <h2>El resultado es: <span id="resultado">{resultado}</span></h2>
      </div>
    </>
  )
}

export default App
