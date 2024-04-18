import React from 'react';
import * as C from "./styles";
import MediaQuery from 'react-responsive';

const ProductCard = ({ product, handleBuy }) => {
  return (
    <C.ProductWrapper>
      <C.ImageContainer>
        <C.Image src={product.image} alt={product.title} />
      </C.ImageContainer>

      <C.line/>

      <C.NameContainer>
        <C.Name>{product.title}</C.Name>
      </C.NameContainer>

      <MediaQuery minWidth={1280}>
        <C.BottomWrapper>
          <C.Price>R${product.price}</C.Price>
          <C.BuyButton onClick={handleBuy}>Comprar</C.BuyButton>
        </C.BottomWrapper>
      </MediaQuery>
      
      <MediaQuery maxWidth={1279}>
        <C.Price>R${product.price}</C.Price>
        <C.BuyButton onClick={handleBuy}>Comprar</C.BuyButton>
      </MediaQuery>
    </C.ProductWrapper>
  );
};

export default ProductCard;