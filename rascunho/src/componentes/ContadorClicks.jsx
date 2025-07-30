import React, { useState } from "react";
import "./ContadorClicks.css";

export default function ContadorClicks() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div className="contador-container">
      <h2>Contador de Cliques: {contador}</h2>
      <button
        onClick={incrementar}
        className={`btn-incrementar ${contador > 10 ? "ativo" : ""}`}
      >
        Incrementar
      </button>
      <button
        onClick={decrementar}
        className={`btn-decrementar ${contador < 0 ? "ativo" : ""}`}
      >
        Decrementar
      </button>
    </div>
  );
}
