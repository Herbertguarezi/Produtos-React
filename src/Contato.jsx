import React from "react";
import foto from "./img/notebook-2.jpg";
import "./Contato.css";

const Contato = () => {
  return (
    <section className="ContatoContainer animeLeft">
      <div className="ContatoContent">
        <img src={foto} alt="camera" />
        <div className="ContatoInfo">
          <h2>Entre em contato.</h2>
          <ul>
            <li className="ContatoList">herbertguarezi@gmail.com</li>
            <li className="ContatoList">99999-9999</li>
            <li className="ContatoList">Rua Ali Perto, 99</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contato;
