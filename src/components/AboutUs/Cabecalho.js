import React from 'react';
import imagemDeFundo from '../../components/AboutUs/images/imagem.png';
import {
  CabecalhoContainer,
  ImagemFundo,
  Titulo,
} from './Styles.js';

function Cabecalho() {
  return (
    <CabecalhoContainer>
      <ImagemFundo src={imagemDeFundo} alt="Imagem de Fundo" />
      <Titulo>SOBRE NÓS</Titulo>
    </CabecalhoContainer>
  );
}

export default Cabecalho;