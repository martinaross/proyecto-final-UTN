import "./Layout.css";
// import logo from "../assets/logo.png"

const Layout = (props) => {
  return (
    <>
      <header className="navbar">
        <div className="logo">LOGO</div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
        </nav>

        <div className="nav-right">
          <span>(+62 123 4567 980)</span>
          <button className="btn-primary">Get Started Now</button>
        </div>
      </header>

      <main>
        {props.children}
      </main>

      <footer className="footer">
        <div className="footer-content">

          {/* Logo izquierda */}
          {/* <div className="footer-logo">
            <img src={logo} alt="imagen de logo"></img>
          </div> */}

          <div className="logo">LOGO</div>

          {/* Email centro */}
          <p className="footer-email">
            XXXXXXXXXX@gmail.com
          </p>

          {/*Redes derecha */}
          <div className="footer-icons">
            <a
              href="https://wa.me/549261XXXXX"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a
              href="https://facebook.com/tu_pagina"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>

            <a
              href="https://instagram.com/tu_usuario"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>

            <a
              href="https://www.tiktok.com/@tu_usuario"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <i className="bx bxl-tiktok"></i>
            </a>
          </div>

        </div>
      </footer>
    </>
  );
};

export { Layout };