import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home";
import Galeria from "../pages/Galeria/Galeria";
import { Contacto } from "../pages/Contacto/Contacto"



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto saludo="¡Hola! Bienvenido a nuestra página de contacto." />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }