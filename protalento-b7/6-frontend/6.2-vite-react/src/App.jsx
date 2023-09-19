import PropTypes from 'prop-types'
import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Card />
    </>
  )
}

export default App


/* 
JSX (JavaScript XML)
*/
const name = 'Alvaro Hernandez';
const title = <h1>Soy un titulo Hola! {name}</h1>

//const titles = [<h1 key={1}>soy un h1</h1>, <h2 key={2}>y yo un h2</h2>]

// los props son solo de lectura
const Title = ({ name, lastname, age }) => {
  return <h1>Hola soy el titulo de tarjeta {name} : {lastname} : {age}</h1>
}
Title.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  age: PropTypes.number,
}


const Paragraph = () => <p>Y yo soy el contenido de la tarjeta</p>

const Card = () => {
  return <>
    <Title name="Brayan" lastname="Chaves" age={31} />
    <Paragraph />
  </>
}
