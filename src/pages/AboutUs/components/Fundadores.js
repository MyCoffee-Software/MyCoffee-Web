import React from 'react';
import './Styles.css';
import fotoFundador1 from './images/fundador1.png';
import fotoFundador2 from './images/fundador2.png';
import fotoFundador3 from './images/fundador3.png';
import fotoFundador4 from './images/fundador4.png';
import fotoFundador5 from './images/fundador5.png';
import fotoFundador6 from './images/fundador6.png';

function Fundadores() {
  return (
    <div>

      <h1>Fudadores</h1>
    <div className="fundadores-grid">
      <div className="fundador-item">
        <img src={fotoFundador1} alt="Fundador 1" />
        <p>Nome do Fundador 1</p>
        <p>Resumo breve do Fundador 1</p>
      </div>
      <div className="fundador-item">
        <img src={fotoFundador2} alt="Fundador 2" />
        <p>Nome do Fundador 2</p>
        <p>Resumo breve do Fundador 2</p>
      </div>
      <div className="fundador-item">
        <img src={fotoFundador3} alt="Fundador 3" />
        <p>Nome do Fundador 3</p>
        <p>Resumo breve do Fundador 3</p>
      </div>
      <div className="fundador-item">
        <img src={fotoFundador4} alt="Fundador 4" />
        <p>Nome do Fundador 4</p>
        <p>Resumo breve do Fundador 4</p>
      </div>
      <div className="fundador-item">
        <img src={fotoFundador5} alt="Fundador 5" />
        <p>Nome do Fundador 5</p>
        <p>Resumo breve do Fundador 5</p>
      </div>
      <div className="fundador-item">
        <img src={fotoFundador6} alt="Fundador 6" />
        <p>Nome do Fundador 5</p>
        <p>Resumo breve do Fundador 5</p>
      </div>
    </div>
    </div>
  );
}

export default Fundadores;