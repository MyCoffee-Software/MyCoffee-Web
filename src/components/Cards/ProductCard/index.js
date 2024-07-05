import React, { useEffect, useState } from 'react';
import * as C from "./styles";
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';

const ProductCard = ({ product }) => {
  const { user } = useAuth();
  const [productImage, setProductImage] = useState(null);

  /*
  useEffect(() => {
    if (product && product.imagens) {
      const imageName = product.imagens.split('/').pop();
      import(`../../../assets/${imageName}`)
        .then(imageModule => {
          setProductImage(imageModule.default);
        })
        .catch(error => {
          console.error(`Failed to load image: ${imageName}`, error);
        });
    }
  }, [product]);*/

  const handleBuy = async () => {
    try {
      if (!user) {
        throw Error("Precisa estar logado para comprar!");
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/carrinho/produtos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`
        },
        body: JSON.stringify({idProduto: product.id, quantidade: 1}),
      });

      if (!response.ok) {
        throw Error("Erro ao adicionar produto ao carrinho!");
      }
      
      toast.success("Produto adicionado ao carrinho!");
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <C.ProductWrapper>
      <ToastContainer/>
      <Link to={`/product/${product.id}`}>
        <C.ImageContainer onClick={handleBuy}>
          <C.Image src={productImage} alt={product.nome} />
        </C.ImageContainer>
      </Link>

      <C.line />

      <C.NameContainer>
        <C.StyledLink to={`/product/${product.id}`}>
          <C.Name>{product.nome}</C.Name>
        </C.StyledLink>
      </C.NameContainer>

      <MediaQuery minWidth={1280}>
        <C.BottomWrapper>
          <C.Price>R${product.preco}</C.Price>
          <C.BuyButton onClick={handleBuy}>Comprar</C.BuyButton>
        </C.BottomWrapper>
      </MediaQuery>

      <MediaQuery maxWidth={1279}>
        <C.Price>R${product.preco}</C.Price>
        <C.BuyButton onClick={handleBuy}>Comprar</C.BuyButton>
      </MediaQuery>
    </C.ProductWrapper>
  );
};

export default ProductCard;