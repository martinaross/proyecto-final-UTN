import { useState } from "react"
import { Layout } from "../../components/Layout/Layout"
import "./Home.css"

const Home = () => {


  return (
    <Layout>
      <div className="image-container">
        <h1>BIENVENIDOS A NUESTRA PÁGINA</h1>

        <h2> Aquí podrás encontrar información sobre nuestro contacto y sucursales. </h2>

        <p>¡Descubre todo lo que tenemos para ofrecerte!</p>

        <img src="https://images.pexels.com/photos/669584/pexels-photo-669584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen representativa de nuestro sitio" />
      </div>

      <div className="items">
        <h3>Entrena con expertos</h3>
        <ul>
          <li>Gimnasios con equipos modernos</li>
          <li>Clases grupales</li>
          <li>Acceso a nuestra aplicación móvil</li>
          <li>Horario flexible</li>
        </ul>

      </div>

    </Layout>
  )
}

export { Home }