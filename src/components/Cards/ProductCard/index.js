import React from 'react';
import * as C from "./styles";
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, handleBuy }) => {
  return (
    <C.ProductWrapper>
      <Link to={`/product/${product.id}`}>
        <C.ImageContainer onClick={handleBuy}>
          <C.Image src={product.image} alt={product.title} />
        </C.ImageContainer>
      </Link>

      <C.line />

      <C.NameContainer>
        <C.StyledLink to={`/product/${product.id}`}>
          <C.Name>{product.title}</C.Name>
        </C.StyledLink>
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