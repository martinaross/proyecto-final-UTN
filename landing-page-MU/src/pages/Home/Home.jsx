import "./Home.css";
import { Layout } from "../../Layout/Layout";
import figure from "../../assets/figure.png"

const Home = () => {
  return (
    <Layout>
      <section className="hero">
        <img className="hero-bg-image" src={figure} alt="figure" />
        <div className="hero-left">
          <h1>
            A NEW ERA OF <br /> MU
          </h1>

          <p>
            Step into the world of MU Online, where legendary battles, ancient powers and epic adventures shape your destiny.
          </p>

          <div className="feature">
            <span>Server Stability</span>
          </div>
          <div className="hero-buttons">
            <a
              href="https://mu-house.com.ar"
              target="_blank"
              rel="noreferrer"
              className="btn-glass"
            >
              WEB OFICIAL
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="btn-glass"
            >
              COMUNIDAD
            </a>
          </div>

          <div className="hero-right"></div>
        </div>

        <div className="hero-right">

        </div>
      </section>
    </Layout>
  );
};

export { Home };