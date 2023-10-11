import List from "./components/List"
import Drink from "./components/Drink"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<List/>}></Route>
          <Route path="/drink/:id" element={<Drink/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
