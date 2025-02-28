import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home";
import { Sucursales } from "../pages/Sucursales/Sucursales";
import { Contacto } from "../pages/Contacto/Contacto"



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Para cada ruta defino el path y la vista */}
        <Route path="/" element={<Home />} />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }