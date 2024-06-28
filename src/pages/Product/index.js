import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as C from "./styles";
import QuantitySelector from '../../components/QuantityPicker';
import MediaQuery from 'react-responsive';
import useAuth from '../../hooks/useAuth';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
  const { permissions } = useAuth();
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    if (product && product.imagens) {
      const imageName = product.imagens.split('/').pop();
      import(`../../assets/${imageName}`)
        .then(imageModule => {
          setProductImage(imageModule.default);
        })
        .catch(error => {
          console.error(`Failed to load image: ${imageName}`, error);
        });
    }
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

  return (
    <C.ProductWrapper>
      <C.ProcutContent>
        <MediaQuery minWidth={600}>
          <C.ImageContainer>
            <C.Image src={productImage} />
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
              <C.BuyButton>Comprar</C.BuyButton>
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

          <C.BuyButton>Comprar</C.BuyButton>
        </MediaQuery>
      </C.ProcutContent>
    </C.ProductWrapper>
  );
};

export default Product