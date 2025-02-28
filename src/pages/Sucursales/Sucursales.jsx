import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./Sucursales.css";


const Sucursales = () => {
  const [sucursales, setSucursales] = useState(null);
  const handleFetch = () => {
    // Genera una URL aleatoria para una imagen de Lorem Picsum
    setSucursales(`https://picsum.photos/800/600?random=${Math.random()}`);
  };

  useEffect(() => {
    handleFetch()
  }, [])


  return (
    <Layout>
      <div className="cont-img-sucursales">
        {sucursales ? <img src={sucursales} alt="imagen de sucursal aleatoria" /> : <h2>Cargando imágenes de gimnasio...</h2>}

      </div>
    </Layout>
  )
}

export { Sucursales }

