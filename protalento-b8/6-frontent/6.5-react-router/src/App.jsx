import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Blog from './components/Blog'
import Home from './components/Home'
import Contacto from './components/Contacto'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link className="principal" to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="blog?/:id" element={<Blog/>}></Route>
            <Route path="contacto" element={<Contacto/>}></Route> 
            {/* Not found 404 */}
            <Route path="*" element={<><h2>Page not Found 404</h2><p>Ups se me olvido programar esta parte</p></>}></Route>
          </Routes>
          {/*
          <h1>Seccion en comun</h1>
                  <Routes>
                    <Route path="/" element={<h1>Home</h1>}></Route>
                    <Route path="blog?/:id" element={<h1>Blog</h1>}></Route>
          </Routes>*/}
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
