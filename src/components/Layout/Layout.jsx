import { Link } from "react-router-dom"
import "./Layout.css"


const Layout = (props) => {
  return (
    <>
      <header>
        <img src="/Logo2.png" alt="imagen de logo" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/galeria">Galeria</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <p>© 2025 | Sitio Web creado por Martina Rossignoli</p>
      </footer>
    </>
  )
}

export { Layout }