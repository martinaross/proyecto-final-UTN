import { Layout } from "../../components/Layout/Layout";
import { useState } from "react";
import "./Contacto.css";

const Contacto = ({ saludo }) => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();


    alert(`Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`);


    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <Layout>
      <h2>{saludo}</h2>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe aquí tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </Layout>
  );
};

export { Contacto };
