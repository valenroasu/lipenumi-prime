import React from "react";
import Colegio from "@assets/colegioconfade.png";

function Historia() {
  return (
    <>
      {/* Cita + foto con encabezado oscuro, lado a lado */}
      <div className="historia-split">
        <div className="quote-card">
          <span className="comillas">"</span>
          <blockquote>
            Para que cualquier cosa suceda, primero hay que hacer algo
          </blockquote>
          <cite>— Albert Einstein</cite>
        </div>
        <div className="historia-foto">
          <div className="titulo">Reseña Histórica</div>
          <img src={Colegio} alt="Fachada del colegio" loading="lazy" />
        </div>
      </div>

      {/* Un antes y un después */}
      <div className="section-banner">Un antes y un después...</div>
      <div className="historia-texto card-white">
        <p>
          Esta institución Educativa, nace como la prolongación de un proyecto
          de vida de su creadora Mg, Esp. Lic. Blanca Rubiela Junco, quien
          siempre soñó con un instrumento para guiar y educar a muchas
          generaciones, sobre la base del amor y las buenas costumbres, basado
          en el lema "Por una Educación Humanística, Creativa y Pertinente a
          las necesidades de la Región y del País en constante cambio". Recibe
          el nombre de Nuevo Milenio, porque inició labores en el año 2000, y
          Liceo porque en la antigua Grecia era el lugar en donde se reunían
          los grandes pensadores como Aristóteles a discutir, reflexionar y
          estudiar.
        </p>
        <br />
        <p>
          Primera directora y fundadora: Esp. Lic. Magíster en educación,
          Blanca Rubiela Junco Espinosa. El 90% de los exalumnos del Liceo
          Pedagógico Nuevo Milenio han tenido éxito académico, profesional,
          laboral y deportivo. El colegio inició con 47 estudiantes, hijos de
          47 familias que creyeron en el proyecto educativo institucional y en
          su fundadora. En la trayectoria de 24 años de servicio se han
          alcanzado grandes metas de calidad gracias al compromiso vocacional
          de la directora, docentes, padres de familia y estudiantes.
        </p>
      </div>

      {/* Reconocimientos y logros */}
      <div className="historia-texto card-white">
        <h2>Reconocimientos y Logros</h2>
        <ul>
          <li>
            En marzo de 2013, Premio Supérate con el Saber, al estudiante
            Leonardo Gonzales Gil en el área de Ciencias Naturales.
          </li>
          <li>
            En 2013, el colegio alcanzó el nivel Superior en Pruebas Saber.
          </li>
          <li>
            El 26 de agosto de 2014, alcanzamos el tercer puesto a nivel
            nacional en el área de Lenguaje y clasificamos entre los 33
            colegios pilos del País.
          </li>
          <li>
            En 2015, el Liceo Pedagógico Nuevo Milenio alcanzó un Índice
            Sintético de Calidad Educativa superior al local, territorial y
            nacional: 8.41.
          </li>
          <li>
            En 2016, nuevamente se obtuvo un Índice Sintético de Calidad
            Educativa superior al local, territorial y nacional: 7.63.
          </li>
          <li>
            En 2017, el ISCE fue de 8.23, superior al territorial y nacional.
            Adicionalmente estuvimos en la semifinal de Supérate con el Saber
            2.0 con Dariana Del Rosario Manjarres Donado.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Historia;
