import { Link } from "react-router-dom"
import "./Layout.css"


const Layout = (props) => {
  return (
    <>
      <header>
        <img src="https://i.pinimg.com/736x/a9/81/d9/a981d96b6941bff877478e018df2fd0e.jpg" alt="imagen de logo" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sucursales">Sucursales</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <p>© 2025 | Sitio Web Creado por Martina Rossignoli</p>
      </footer>
    </>
  )
}

export { Layout }