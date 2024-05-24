import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";


import destaque1 from "../../assets/destaque1.svg";
import destaque2 from "../../assets/destaque2.svg";
import destaque3 from "../../assets/destaque3.svg";
import xicara from "../../assets/xicaraCafe.svg";
import graoCafe from "../../assets/graoCafe.svg";
import kit from "../../assets/kit.svg";
import promocoes from "../../assets/promocoes.svg";
import cafe from "../../assets/Cafe.svg";
import capsula from "../../assets/Capsula.svg";

const Home = () => {
  return (
    <C.Overlap>
      <C.Image src={graoCafe} alt="Image" />
      <C.Img src={graoCafe} alt="Image" />
      <C.Image2 src={graoCafe} alt="Image" />
      <C.Div />
      <C.Image3 src={graoCafe} alt="Image" />
      <C.Image4 src={graoCafe} alt="Image" />
      <C.Image5 src={graoCafe} alt="Image" />
      <C.Image6 src={graoCafe} alt="Image" />
      <C.Image7 src={graoCafe} alt="Image" />
      <C.Image8 src={graoCafe} alt="Image" />
      <C.xicara src={xicara} alt="Image" />
      <C.texto1>
        Desperte sua paixão pelo café. Sabor, tradição e qualidade em cada
        xícara.
      </C.texto1>
      <C.texto3>Produtos em Destaque</C.texto3>
      <C.Task />
      <C.Task2 src={graoCafe} alt="Task" />

      <C.destaque1 src={destaque1} alt="imagem-1" />
      <C.destaque1texto>CAFÉ CLÁSSICO | DRIP COFFEE -</C.destaque1texto>
      <C.destaque1preco>R$ 29,30</C.destaque1preco>
      <C.TextWrapper7>Comprar</C.TextWrapper7>
      <C.Task3 />
      <C.destaque2 src={destaque2} alt="imagem-2" />
      <C.destaque2texto>CAFÉ CLÁSSICO | DRIP COFFEE -</C.destaque2texto>
      <C.destaque2preco>R$ 29,30</C.destaque2preco>
      <C.TextWrapper9>Comprar</C.TextWrapper9>
      <C.Task5 />
      <C.destaque3 src={destaque3} alt="texto-3" />
      <C.Task6 src={destaque1} alt="Task" />
      <C.destaque3texto>CAFÉ CLÁSSICO | DRIP COFFEE -</C.destaque3texto>
      <C.destaque3preco>R$ 29,30</C.destaque3preco>
      <C.TextWrapper11>Comprar</C.TextWrapper11>
      <C.Rectangle3 />
      <C.Rectangle4 />
      <C.Rectangle5 />
      <C.Image10 src={graoCafe} alt="Image" />
      <C.Image11 src={graoCafe} alt="Image" />
      <Link to="/products">
        <C.capsula src={capsula} alt="Image" />
      </Link>
      <Link to="/products">
        <C.kit src={kit} alt="Image" />
      </Link>
      <Link to="/products">
        <C.TextWrapper13>Cafés</C.TextWrapper13>
      </Link>
      <Link to="/products">
        <C.TextWrapper14>Cápsulas</C.TextWrapper14>
      </Link>

      <Link to="/products">
        <C.cafe src={cafe} alt="Image" />
      </Link>
      <Link to="/products">
        <C.promocoes src={promocoes} alt="Image" />
      </Link>
      <C.texto2>
        Descubra a arte de apreciar um café excepcional todos os dias. Com nossa
        assinatura, você recebe em sua casa grãos selecionados, torrados com
        maestria, para uma experiência única a cada xícara.
      </C.texto2>
      <C.Overlap2>
        <C.Image16 src={graoCafe} alt="Image" />
        <Link to="/products">
          <C.TextWrapper16>Kits</C.TextWrapper16>
        </Link>
        <Link to="/products">
          <C.TextWrapper17>Promoções</C.TextWrapper17>
        </Link>
      </C.Overlap2>
    </C.Overlap>
  );
};

export default Home;
