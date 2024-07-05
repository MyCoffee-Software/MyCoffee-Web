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
import Multiselect from 'multiselect-react-dropdown';
import ImageDisplay from '../../../../components/ImageDisplay';


const EditProduct = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    discount: '',
    brand: '',
    bar: '',
    image: '',
    description: ''
  });
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/produtos?id=${product_id}`);
        const data = await response.json();
        setProduct(data);

        const imageUrls = await Promise.all(
          data.imagens.map(async (imageUrl) => {
            const imageRes = await fetch(`${process.env.REACT_APP_API_URL}/imagens/${imageUrl}`);
            const imageBlob = await imageRes.blob();
            return URL.createObjectURL(imageBlob);
          })
        );
        setImage(imageUrls);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/categorias?limite=20&pagina=1`);
        const data = await response.json();
        setCategories(data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchCategories();
    fetchProduct();
  }, [product_id]);

  useEffect(() => {
    if (product_id && product) {
      setProductData({
        title: product.nome,
        price: product.preco,
        discount: product.desconto_porcentual,
        brand: product.marca,
        bar: product.codigo_de_barras,
        image: product.imagens,
        description: product.descricao
      });

      const selectedCategories = product.categorias.map(cat => ({
        id: cat.id,
        nome: cat.nome
      }));
      setSelectedCategories(selectedCategories);
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let val = value;

    if (name === 'price' || name === 'discount') {
      val = parseFloat(value);
    }

    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: val,
    }));
  };

  const handleSave = async () => {
    let imagePath = '';
    try {
      if (imageFile) {
        const formData = new FormData();
        const fileExtension = imageFile.name.split('.').pop();
        const sanitizedTitle = productData.title.replace(/[^a-zA-Z0-9]/g, '_');
        const timestamp = Date.now();
        const randomId = Math.random().toString(36).substring(2, 8);
        const imageName = `${sanitizedTitle}_2_${timestamp}_${randomId}.${fileExtension}`;
        formData.append('imagem', imageFile, imageName);

        const imageResponse = await fetch(`${process.env.REACT_APP_API_URL}/imagens/produtos/${imageName}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("user_token")}`
          },
          body: formData,
        });

        if (!imageResponse.ok) {
          throw new Error('Erro ao enviar imagem para o servidor');
        }

        const imageResult = await imageResponse.json();
        imagePath = imageResult.URL;
      }
    } catch(e) {
      toast.error(e.message);
      console.log(e.message);
    }

    const reqBody = selectedCategories.map(cat => cat.id);
    const requestBody = {
      nome: productData.title,
      preco: productData.price,
      descricao: productData.description,
      desconto_porcentual: productData.discount,
      codigo_de_barras: productData.bar,
      marca: productData.brand,
      imagens: [imagePath]
    };

    if (product_id) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/produtos?id=${product_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("user_token")}`
          },
          body: JSON.stringify(requestBody),
        });
  
        if (!response.ok) {
          throw new Error("Erro ao atualizar/criar produto!");
        }
  
        const res = await fetch(`${process.env.REACT_APP_API_URL}/produtos/categorias?id=${product_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("user_token")}`
          },
          body: JSON.stringify(reqBody),
        });
  
        if (!res.ok) {
          throw new Error("Erro ao atualizar categorias!");
        }
  
        toast.success("Produto atualizado com sucesso", {
          theme: "colored",
        });
      } catch (e) {
        toast.error("Erro ao atualizar produto!");
        console.error("Error:", e);
      }
    } else {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/produtos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("user_token")}`
          },
          body: JSON.stringify(requestBody),
        });
  
        if (!response.ok) {
          throw new Error("Erro ao atualizar/criar produto!");
        }
  
        const data = await response.json();

        const res = await fetch(`${process.env.REACT_APP_API_URL}/produtos/categorias?id=${data.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("user_token")}`
          },
          body: JSON.stringify(reqBody),
        });
  
        if (!res.ok) {
          throw new Error("Erro ao atualizar categorias!");
        }
  
        toast.success("Produto criado com sucesso", {
          theme: "colored",
        });
      } catch (e) {
        toast.error("Erro ao criar produto!");
        console.error("Error:", e);
      }
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

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

            <C.SelectContainer>
              <C.Label>Categorias</C.Label>
              <Multiselect
                options={categories}
                selectedValues={selectedCategories}
                displayValue='nome'
                onSelect={(selectedList) => setSelectedCategories(selectedList)}
                onRemove={(selectedList) => setSelectedCategories(selectedList)}
                showCheckbox={true}
                placeholder='Selecione as categorias'
                hidePlaceholder={true}
                avoidHighlightFirstOption={true} />
            </C.SelectContainer>

            <InfoInput title="Marca" name="brand" inputInfo={productData.brand} onChange={handleInputChange} />
            <InfoInput title="Código de barras" name="bar" inputInfo={productData.bar} onChange={handleInputChange} />
            <Textarea title="Descrição" name="description" info={productData.description} onChange={handleInputChange} />
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </C.ProductInfoColumn>

          <C.ProductInfoColumn>
            <C.ProductImageContainer>
              <ImageDisplay images={image}/>
            </C.ProductImageContainer>

            <C.ProductInfoRow>
              <InfoInput title="Preço" name="price" inputInfo={productData.price} onChange={handleInputChange} />
              <InfoInput title="Desconto" name="discount" inputInfo={productData.discount} onChange={handleInputChange} />
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