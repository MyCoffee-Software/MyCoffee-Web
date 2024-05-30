import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import * as C from "./styles"; 
import InfoInput from '../../../../components/InfoInput';

const EditProduct = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    category: '',
    image: ''
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
        image: product.image
      });
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, inputInfo } = e.target;
    setProductData((prevInputDData) => ({
      ...prevInputDData,
      [name]: inputInfo,
    }));
  };

  return (
    <C.ProductContainer>
      <C.Title>Editar Produto</C.Title>

      <C.ProductInfoWrapper>
        <C.ProductInfoColumn>
          <C.ProductImage src={productData.image}/>
        </C.ProductInfoColumn>
        <C.ProductInfoColumn>
          <InfoInput title="Nome" name="title" inputInfo={productData.title} onChange={handleInputChange} />
          <InfoInput title="Preço" name="price" inputInfo={productData.price} onChange={handleInputChange} />
          <InfoInput title="Categoria" name="category" inputInfo={productData.category} onChange={handleInputChange} />
          <InfoInput title="Preço" name="price" inputInfo={productData.price} onChange={handleInputChange} />
          <InfoInput title="Preço" name="price" inputInfo={productData.price} onChange={handleInputChange} />
          <InfoInput title="Preço" name="price" inputInfo={productData.price} onChange={handleInputChange} />
          <InfoInput title="Preço" name="price" inputInfo={productData.price} onChange={handleInputChange} />
        </C.ProductInfoColumn>
      </C.ProductInfoWrapper>
    </C.ProductContainer>
  );
};

export default EditProduct;