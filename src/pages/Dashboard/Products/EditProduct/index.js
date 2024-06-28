import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as C from "./styles";
import InfoInput from '../../../../components/InfoInput';
import Textarea from '../../../../components/Textarea';
import Button from '../../../../components/Button';
import { ActionLink } from '../ListProducts/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';


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
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    if (product && product.imagens) {
      const imageName = product.imagens.split('/').pop();
      import(`../../../../assets/${imageName}`)
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

  useEffect(() => {
    if (product) {
      setProductData({
        title: product.nome,
        price: product.preco,
        category: product.categoria,
        image: product.imagens,
        description: product.descricao
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
    if (product_id) {
      toast.success('Salvo', {
        theme: "colored",
      });
      console.log(productData)
    } else {
      toast.success('Novo', {
        theme: "colored",
      });
      console.log(productData)
    }
  }

  return (
    <>
      <MediaQuery minWidth={1280}>
        <ActionLink to={"/dashboard/products_dashboard"}>
          <C.Button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </C.Button>
        </ActionLink>
      </MediaQuery>
      
      <C.ProductContainer>

        <C.Title>Editar Produto</C.Title>

        <C.ProductInfoWrapper>
          <C.ProductInfoColumn>
            <InfoInput title="Nome" name="title" inputInfo={productData.title} onChange={handleInputChange} />
            <InfoInput title="Categoria" name="category" inputInfo={productData.category} onChange={handleInputChange} />
            <InfoInput title="Marca" name="price" inputInfo={productData.price} onChange={handleInputChange} />
            <Textarea title="Descrição" name="description" info={productData.description} onChange={handleInputChange} />
          </C.ProductInfoColumn>

          <C.ProductInfoColumn>
            <C.ProductImageContainer>
              <C.ProductImage src={productImage} />
            </C.ProductImageContainer>

            <C.ProductInfoRow>
              <InfoInput title="Preço" name="price" inputInfo={productData.price} onChange={handleInputChange} />
              <InfoInput title="Desconto" name="price" inputInfo={productData.price} onChange={handleInputChange} />
            </C.ProductInfoRow>
          </C.ProductInfoColumn>
        </C.ProductInfoWrapper>
        <C.ProductInfoRow>
          <Button Text="Salvar" onClick={() => handleSave()} />
        </C.ProductInfoRow>
      </C.ProductContainer>
      <ToastContainer />
    </>
  );
};

export default EditProduct;