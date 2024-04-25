import React from 'react';
import imagemDeFundo from './images/imagem.png';
import './Styles.css';

function Cabecalho() {
  return (
    <div className="cabecalho-container">
      <img className="imagem-fundo" src={imagemDeFundo} alt="Imagem de Fundo" />
      <h1 className="titulo">SOBRE NÓS</h1>
    </div>
  );
}

export default Cabecalho;