import React from "react";
import logo from "@assets/logo.png";
import Bandera from "@assets/bandera.png";
import himnoAudio from "@assets/HIMNO PEDAGOGICO.mp3";

const Simbolos = () => {
  const descargarHimno = () => {
    const link = document.createElement("a");
    link.href = himnoAudio;
    link.download = "Himno_Pedagogico_Lipenumi.mp3";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="section-banner">Símbolos Institucionales</div>

      <div className="simbolos-grid">
        {/* HIMNO */}
        <div className="simbolo-card">
          <h2>Himno</h2>
          <h3>CORO</h3>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            DIOS TE SALVE PLANTEL MILENISTA,
            <br />
            GUÍA DEL DIARIO QUEHACER CUAL ANTORCHA,
            <br />
            ILUMINA NUESTRAS VIDAS BUSCANDO:
            <br />
            EDUCAR, FORMAR Y VENCER.
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>I</strong>
            <br />
            Escalando en la vida Innovando también,
            <br />
            Gritaremos todos unidos:
            <br />
            ¡"Somos hombres y mujeres de bien"!
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>II</strong>
            <br />
            Valoramos al prójimo, A nuestra familia también,
            <br />
            Logrando la excelencia Serviremos a Santa Marta,
            <br />
            al país y al mundo También.
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>III</strong>
            <br />
            Cual labriegos sembramos Semillas de paz,
            <br />
            amor y hermandad "Para que cese la guerra
            <br />Y triunfe la paz"
          </p>
          <button className="btn-azul" onClick={descargarHimno}>
            ♫ Descargar Himno MP3
          </button>
        </div>

        {/* BANDERA */}
        <div className="simbolo-card">
          <h2>Bandera</h2>
          <img src={Bandera} alt="Bandera del colegio" loading="lazy" />
          <p>
            Desde 2001, se diseñó la bandera del colegio fondo blanco, el cual
            representa la tan anhelada paz que proclamamos los colombianos y en
            especial los estudiantes de todos los rincones del País. Llevará el
            escudo en el centro con el mapamundi y un libro abierto que tiene
            un eslogan que dice "Un mundo abierto al conocimiento".
          </p>
        </div>

        {/* ESCUDO / LOGO */}
        <div className="simbolo-card">
          <h2>Escudo</h2>
          <img src={logo} alt="Escudo del colegio" loading="lazy" />
          <p>Contiene los siguientes símbolos:</p>
          <ul>
            <li>
              Un libro abierto que representa el énfasis hacia la lectura y la
              escritura significativa.
            </li>
            <li>
              El globo terráqueo que representa la tendencia pedagógica de
              preparar hombres para la vida, capaces de trascender mediante el
              conocimiento de su cultura regional, nacional y mundial.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Simbolos;
