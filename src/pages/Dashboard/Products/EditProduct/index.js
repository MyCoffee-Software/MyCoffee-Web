import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as C from "./styles"; 
import InfoInput from '../../../../components/InfoInput';
import Textarea from '../../../../components/Textarea';
import Button from '../../../../components/Button';

const EditProduct = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    category: '',
    image: '',
    description: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${product_id}`);
        const data = await response.json();
        setProduct(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProduct();
  }, [product_id]);

  useEffect(() => {
    if (product) {
      setProductData({
        title: product.title,
        price: product.price,
        category: product.category,
        image: product.image,
        description: product.description
      });
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    
  }

  const handleRegister = () => {

  }

  return (
    <C.ProductContainer>
      <C.Title>Editar Produto</C.Title>

      <C.ProductInfoWrapper>
        <C.ProductInfoColumn>
          <InfoInput title="Nome" name="title" inputInfo={productData.title} onChange={handleInputChange} />
          <InfoInput title="Categoria" name="category" inputInfo={productData.category} onChange={handleInputChange} />
          <InfoInput title="Marca" name="price" inputInfo={productData.price} onChange={handleInputChange} />
          <Textarea title="Descrição" name="description" info={productData.description} onChange={handleInputChange}/>
        </C.ProductInfoColumn>

        <C.ProductInfoColumn>
          <C.ProductImageContainer>
            <C.ProductImage src={productData.image}/>
          </C.ProductImageContainer>

          <C.ProductInfoRow>
            <InfoInput title="Preço" name="price" inputInfo={productData.price} onChange={handleInputChange} />
            <InfoInput title="Desconto" name="price" inputInfo={productData.price} onChange={handleInputChange} />
          </C.ProductInfoRow>
        </C.ProductInfoColumn>
      </C.ProductInfoWrapper>
      <C.ProductInfoRow>
        <Button Text="Cadastrar" onClick={handleRegister}/>
        <Button Text="Salvar" onClick={handleSave}/>
      </C.ProductInfoRow>
    </C.ProductContainer>
  );
};

export default EditProduct;