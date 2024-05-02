import React from 'react';
import {
  Container,
  FundadoresGrid,
  FundadorItem,
  FundadorItemImg,
} from './Styles.js';
import fotoFundador1 from '../../components/AboutUs/images/fundador1.png';
import fotoFundador2 from '../../components/AboutUs/images/fundador2.png';
import fotoFundador3 from '../../components/AboutUs/images/fundador3.png';
import fotoFundador4 from '../../components/AboutUs/images/fundador4.png';
import fotoFundador5 from '../../components/AboutUs/images/fundador5.png';
import fotoFundador6 from '../../components/AboutUs/images/fundador6.png';

function Fundadores() {
  return (
    
    <Container>
      <h1>Fundadores</h1>
        <FundadoresGrid>
      <FundadorItem>
        <FundadorItemImg src={fotoFundador1} alt="Fundador 1" />
        <p>Nome do Fundador 1</p>
        <p>Resumo breve do Fundador 1</p>
      </FundadorItem>
      <FundadorItem>
        <FundadorItemImg src={fotoFundador2} alt="Fundador 2" />
        <p>Nome do Fundador 2</p>
        <p>Resumo breve do Fundador 2</p>
      </FundadorItem>
      <FundadorItem>
        <FundadorItemImg src={fotoFundador3} alt="Fundador 3" />
        <p>Nome do Fundador 3</p>
        <p>Resumo breve do Fundador 3</p>
      </FundadorItem>
      <FundadorItem>
        <FundadorItemImg src={fotoFundador4} alt="Fundador 4" />
        <p>Nome do Fundador 4</p>
        <p>Resumo breve do Fundador 4</p>
      </FundadorItem>
      <FundadorItem>
        <FundadorItemImg src={fotoFundador5} alt="Fundador 5" />
        <p>Nome do Fundador 5</p>
        <p>Resumo breve do Fundador 5</p>
      </FundadorItem>
      <FundadorItem>
        <FundadorItemImg src={fotoFundador6} alt="Fundador 6" />
        <p>Nome do Fundador 5</p>
        <p>Resumo breve do Fundador 5</p>
      </FundadorItem>
    </FundadoresGrid>
    
    </Container>
  );
}

export default Fundadores;