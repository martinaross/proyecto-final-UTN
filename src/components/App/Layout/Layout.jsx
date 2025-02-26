import "./Layout.css"

const Layout = () => {
  return (
    <>
      <header>
        <img src="https://i.pinimg.com/736x/a9/81/d9/a981d96b6941bff877478e018df2fd0e.jpg" alt="imagen de logo" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Sucursales</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>CONTENIDO DINAMICO DE CADA PÁGINA</h2>
      </main>
      <footer>
        <p>© 2025 | Sitio Web Creado por Martina Rossignoli</p>
      </footer>
    </>
  )
}

export { Layout }