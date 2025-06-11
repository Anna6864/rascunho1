import React from "react";
import { carros } from "../dados_carro";
import "./ListaCarros.css";

export default function ListaCarros() {
  const listaCompleta = carros.map((carro, i) => (
    <li key={i}>
      {carro.modelo} - {carro.ano}
    </li>
  ));

  const listaVermelhos = carros
    .filter((carro) => carro.cor.toLowerCase() === "vermelho")
    .map((carro, i) => <li key={i}>{carro.modelo}</li>);

  return (
    <div className="lista-container">
      <h2>Lista Completa de Carros</h2>
      <ul>{listaCompleta}</ul>

      <h2>Carros Vermelhos (Modelos)</h2>
      <ul>{listaVermelhos}</ul>
    </div>
  );
}
