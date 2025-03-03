import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./Galeria.css";

function Galeria() {
  const [Galeria, setGaleria] = useState("");


  const fetchNewImage = () => {
    const randomImage = `https://picsum.photos/800/600?random=${Math.random()}`;
    setGaleria(randomImage);
  };


  useEffect(() => {
    fetchNewImage();
  }, []);

  return (
    <Layout>
      <div className="card custom-card">
        <img
          src={Galeria || "https://via.placeholder.com/800x600?text=Loading..."}
          className="card-img-top"
          alt="Galeria de imagenes"
        />
        <div className="card-body">
          <h5 className="card-title">NUESTRAS DESTACADAS</h5>

          <button onClick={fetchNewImage} className="btn btn-primary">
            Ver más
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Galeria;

