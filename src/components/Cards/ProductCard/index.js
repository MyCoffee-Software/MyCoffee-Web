import React from 'react';
import * as C from "./styles";
import Button from '../../Button';

const ProductCard = ({ product, handleBuy }) => {
  return (
    <C.Container>
      <C.FirstContainer>
        <C.Image src={product.image} alt={product.name} />
        <C.Name>{product.name}</C.Name>
      </C.FirstContainer>
      
      <C.SecondContainer>
        <C.Price>{product.price}</C.Price>
        <C.BuyButton onClick={handleBuy}>Comprar</C.BuyButton>
      </C.SecondContainer>
    </C.Container>
  );
};

export default ProductCard;