import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import Colegio from "@assets/colegio.png";
import Inscripciones from "@assets/INSCRIPCIONES.png";
import ISCE from "@assets/ISCE.png";
import Estudiantes1 from "@assets/estudiantes1.jpg";

// ✏️ EDITA AQUÍ las tarjetas pequeñas de la oferta académica.
// Cambia "titulo" y "texto" por la información real que quieras mostrar.
const infoCards = [
  {
    titulo: "Portafolios y capacitación",
    texto:
      "Contamos con profesores capacitados y comprometidos con la educación del último milenio.",
  },
  {
    titulo: "Educación inclusiva",
    texto: "Acompañamiento y orientación para todos nuestros estudiantes.",
  },
  {
    titulo: "Convenio Santillana",
    texto: "Material y plataformas educativas de apoyo al aprendizaje.",
  },
  {
    titulo: "Deporte y cultura",
    texto: "Intercolegiados, proyectos maker y actividades para toda la familia.",
  },
];

// ✏️ EDITA AQUÍ las noticias: imagen y texto de cada tarjeta.
const noticias = [
  {
    imagen: Inscripciones,
    texto:
      "¡Inscripciones y matrículas abiertas! Conoce nuestra oferta y únete a la familia milenista.",
  },
  {
    imagen: Estudiantes1,
    texto:
      "El Liceo Pedagógico Nuevo Milenio ofrece cupos especiales para niños no alfabetizados.",
  },
  {
    imagen: ISCE,
    texto:
      "Este año seguimos alcanzando un Índice Sintético de Calidad superior al promedio nacional.",
  },
];

const PrincipalPage = () => {
  return (
    <>
      {/* HERO: foto del colegio con el lema encima */}
      <div className="hero">
        <img src={Colegio} alt="Liceo Pedagógico Nuevo Milenio" />
        <div className="hero-overlay">
          <p className="hero-slogan">
            "Por una educación humana, creativa y pertinente a las necesidades
            de la región y del país en constante cambio" y un mundo abierto al
            conocimiento.
          </p>
        </div>
      </div>

      {/* OFERTA ACADÉMICA */}
      <div className="oferta-section">
        <div className="oferta-titulo card-white">
          <h2>Conoce nuestra oferta académica</h2>
          <ul>
            <li>Pre-escolar</li>
            <li>Básica Primaria</li>
            <li>Básica Media</li>
            <li>Bachillerato</li>
          </ul>
        </div>
        <div className="mini-cards">
          {infoCards.map((card, i) => (
            <div className="mini-card" key={i}>
              <h4>{card.titulo}</h4>
              <p>{card.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CÓMO LLEGAR */}
      <div className="como-llegar-banner">
        <EnvironmentOutlined /> Cómo llegar
      </div>
      <iframe
        title="Google Maps"
        width="92%"
        height="400"
        style={{
          border: "0",
          borderRadius: "14px",
          boxShadow: "0 4px 14px rgba(20, 51, 95, 0.12)",
          maxWidth: "1100px",
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1645.428591513316!2d-74.19943624568032!3d11.223787222318789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5999d45d42b%3A0xdb4ad7e36cd63d90!2sLiceo%20Pedag%C3%B3gico%20Nuevo%20Milenio!5e0!3m2!1ses!2sco!4v1742405762305!5m2!1ses!2sco"
      ></iframe>

      {/* NOTICIAS */}
      <div className="section-banner">Noticias</div>
      <div className="noticias-grid">
        {noticias.map((noticia, i) => (
          <div className="noticia-card" key={i}>
            <img src={noticia.imagen} alt={`noticia-${i + 1}`} loading="lazy" />
            <p>{noticia.texto}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PrincipalPage;
