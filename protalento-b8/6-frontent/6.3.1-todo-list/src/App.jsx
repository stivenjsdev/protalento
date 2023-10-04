import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [product, setProduct] = useState('')
  // const items = ["Cereal", "Coca Cola", "Azucar", "Leche"]

  const changeInput = (evt) =>{
    setProduct(evt.target.value)
  }

  const addItem = () =>{
    /** ESTO ES INCORRECTO */
    // items.push(product)

    //Hacemos una mezcla de el actual items con el nuvo producto
    if(product!==""){
      const arr = [...items, product] 
      setItems(arr)
      setProduct('')
    }else{
      alert("No se admite vacio")
    }
  }

  return (
    <>
      <input type="text" onChange={changeInput} value={product}/>
      <button onClick={addItem}>Agregar</button>
      <ul>
        {
          items.map((item, i)=>
            (<li key={i}>{item} <button>Borrar</button></li>)
          )
        }
      </ul>
    </>
  )
}

export default App
