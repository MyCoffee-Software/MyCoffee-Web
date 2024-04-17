import React from 'react';
import * as C from "./styles";
import Button from '../../Button';
import MediaQuery from 'react-responsive';

const ProductCard = ({ product, handleBuy }) => {
  return (
    <C.ProductWrapper>
      <C.Image src={product.image} alt={product.name} />
      <C.Name>{product.name}</C.Name>

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