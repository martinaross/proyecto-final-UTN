import { useState } from "react"
import { Layout } from "../../components/Layout/Layout"
import "./Home.css"

const Home = () => {


  return (
    <Layout>
      <div className="image-container">
        <h1>  BIENVENIDOS A NUESTRO SITIO WEB  </h1>

        <h2> Descubri todo sobre nuestros servicios, medios de contacto, ¡y más! </h2>

        <h3>¡MÁS DE 250 CLIENTES HASTA LA FECHA!</h3>

        <img src="https://images.pexels.com/photos/2170450/pexels-photo-2170450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen representativa de nuestro sitio" />
      </div>

      <div className="items">
        <h3>El profesionalismo y la pasión, juntos.</h3>
        <ul>
          <li>BODAS</li>
          <li>CUMPLEAÑOS</li>
          <li>BOOKS PERSONALES</li>
          <li>FOTO PRODUCTO</li>
        </ul>

      </div>

    </Layout>
  )
}

export { Home }