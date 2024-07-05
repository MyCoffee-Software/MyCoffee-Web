import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as C from "./styles";
import QuantitySelector from '../../components/QuantityPicker';
import MediaQuery from 'react-responsive';
import useAuth from '../../hooks/useAuth';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import ImageDisplay from '../../components/ImageDisplay';

const Product = () => {
  const { user, permissions } = useAuth();
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = await Promise.all(
          product.imagens.map(async (imageUrl) => {
            const imageRes = await fetch(`${process.env.REACT_APP_API_URL}/imagens/${imageUrl}`);
            const imageBlob = await imageRes.blob();
            return URL.createObjectURL(imageBlob);
          })
        );
        setImages(imageUrls);
      } catch (e) {
        console.log(e.message);
      }
    }

    fetchImages();
  }, [product]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/produtos?id=${product_id}`);
        const data = await response.json();
        setProduct(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProduct();
  }, [product_id]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

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
        body: JSON.stringify({idProduto: product.id, quantidade: quantity}),
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
      <C.ProcutContent>
        <MediaQuery minWidth={600}>
          <C.ImageContainer>
            <ImageDisplay images={images}/>
          </C.ImageContainer>

          <C.DetailsContainer>
            {permissions.includes("Administrador") && (
              <C.IconsContainer>
                <C.StyledIcon icon={faEdit} size='lg' />
                <C.StyledIcon icon={faTrash} size='lg' fontColor='red' />
              </C.IconsContainer>
            )}

            <C.Label fontSize="24px">{product.nome}</C.Label>
            <C.line />
            <C.Label fontSize="22px" fontColor="red">R$ {product.preco}</C.Label>
            <C.Label fontSize="16px">{product.descricao}</C.Label>

            <C.BuyContainer>
              <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange}></QuantitySelector>
              <C.BuyButton onClick={handleBuy}>Comprar</C.BuyButton>
            </C.BuyContainer>
          </C.DetailsContainer>
        </MediaQuery>

        <MediaQuery maxWidth={599}>
          <C.ImageContainer>
            <C.Image src={product.imagens} />
          </C.ImageContainer>

          <C.DetailsContainer>
            {permissions.includes("Administrador") && (
              <C.IconsContainer>
                <C.StyledIcon icon={faEdit} size='lg' />
                <C.StyledIcon icon={faTrash} size='lg' fontColor='red' />
              </C.IconsContainer>
            )}


            <C.Label fontSize="22px" fontColor="red">R$ {product.preco}</C.Label>
            <C.Label fontSize="24px">{product.preco}</C.Label>
            <C.line />
            <C.Label fontSize="20px">Descrição</C.Label>
            <C.Label fontSize="16px">{product.descricao}</C.Label>
          </C.DetailsContainer>

          <C.BuyButton onClick={handleBuy}>Comprar</C.BuyButton>
        </MediaQuery>
      </C.ProcutContent>
    </C.ProductWrapper>
  );
};

export default Product