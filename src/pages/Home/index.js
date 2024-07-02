import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Cards/ProductCard";
import * as C from "./styles";
import { Link } from "react-router-dom";

// Importando imagens
import xicara from "../../assets/xicaraCafe.svg";
import graoCafe from "../../assets/graoCafe.svg";
import kit from "../../assets/kit.svg";
import promocoes from "../../assets/promocoes.svg";
import cafe from "../../assets/Cafe.svg";
import capsula from "../../assets/Capsula.svg";

const Home = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const fetchFixedProducts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/produtos?limite=10&pagina=1`);
        const data = await response.json();
        
        // Select the first 4 products
        const fixedProducts = data.slice(0, 4);
        
        setRandomProducts(fixedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    

    fetchFixedProducts();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <>
      {/* Imagem de xícara */}
      <C.xicara src={xicara} alt="Image" />
      {/* Texto inicial */}
      <C.texto1>
        Desperte sua paixão pelo café. Sabor, tradição e qualidade em cada
        xícara.
      </C.texto1>

      {/* Divisão estilizada para produtos */}
      <C.Div>
        {/* Exibição dos produtos aleatórios */}
        <C.ProductsWrapper>
          {randomProducts.map((product) => (
            <C.ProductsContent key={product.id}>
              <ProductCard product={product} />
            </C.ProductsContent>
          ))}
        </C.ProductsWrapper>
      </C.Div>

      {/* Imagens de grão de café */}
      <C.Image10 src={graoCafe} alt="Image" />
      <C.Image11 src={graoCafe} alt="Image" />
      <C.Image src={graoCafe} alt="Image" />
      <C.Img src={graoCafe} alt="Image" />
      <C.Image2 src={graoCafe} alt="Image" />
      <C.Image16 src={graoCafe} alt="Image" />
      <C.Image3 src={graoCafe} alt="Image" />
      <C.Image4 src={graoCafe} alt="Image" />
      <C.Image5 src={graoCafe} alt="Image" />
      <C.Image6 src={graoCafe} alt="Image" />
      <C.Image7 src={graoCafe} alt="Image" />
      <C.Image8 src={graoCafe} alt="Image" />

      {/* Links para categorias */}
      <Link to="/products">
        <C.capsula src={capsula} alt="Image" />
        <C.TextWrapper14>Cápsulas</C.TextWrapper14>
      </Link>
      <Link to="/products">
        <C.kit src={kit} alt="Image" />
        <C.TextWrapper16>Kits</C.TextWrapper16>
      </Link>
      <Link to="/products">
        <C.cafe src={cafe} alt="Image" />
        <C.TextWrapper13>Cafés</C.TextWrapper13>
      </Link>
      <Link to="/products">
        <C.promocoes src={promocoes} alt="Image" />
        <C.TextWrapper17>Promoções</C.TextWrapper17>
      </Link>

      {/* Texto de descrição */}
      <C.texto2>
        Descubra a arte de apreciar um café excepcional todos os dias. Com nossa
        assinatura, você recebe em sua casa grãos selecionados, torrados com
        maestria, para uma experiência única a cada xícara.
      </C.texto2>
      <C.texto3>Produtos em Destaque</C.texto3>
    </>
  );
};

export default Home;
