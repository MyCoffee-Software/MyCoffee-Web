import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as C from "./styles";
import InfoInput from '../../../../components/InfoInput';
import Textarea from '../../../../components/Textarea';
import Button from '../../../../components/Button';
import { ActionLink } from '../ListPlans/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';
import ImageDisplay from '../../../../components/ImageDisplay';

const EditPlan = () => {
  const { plan_id } = useParams();
  const [plan, setPlan] = useState([]);
  const [planData, setPlanData] = useState({
    title: '',
    priceMonth: '',
    priceYear: '',
    discount: '',
    active: false,
    image: '',
    description: ''
  });
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/planos?id=${plan_id}`);
        const data = await response.json();
        setPlan(data);

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

    fetchPlan();
  }, [plan_id]);

  useEffect(() => {
    if (plan) {
      setPlanData({
        title: plan.nome,
        priceMonth: plan.precoMensal,
        priceYear: plan.precoAnual,
        discount: plan.desconto,
        active: plan.ativo,
        image: plan.imagem,
        description: plan.descricao
      });
    }
  }, [plan]);

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    let val = value

    if (name === "priceMonth" || name === "priceYear" || name === "discount") {
      val = parseFloat(value);
    }

    if (name === "active") {
      val = checked;
    }

    setPlanData((prevPlanData) => ({
      ...prevPlanData,
      [name]: val,
    }));
  };

  const handleSave = async () => {
    if (plan_id) {
      try {
        let imagePath = '';
        if (imageFile) {
          const formData = new FormData();
          const fileExtension = imageFile.name.split('.').pop();
          const sanitizedTitle = planData.title.replace(/[^a-zA-Z0-9]/g, '_');
          const timestamp = Date.now();
          const randomId = Math.random().toString(36).substring(2, 8);
          const imageName = `${sanitizedTitle}_2_${timestamp}_${randomId}.${fileExtension}`;
          formData.append('imagem', imageFile, imageName);

          const imageResponse = await fetch(`${process.env.REACT_APP_API_URL}/imagens/planos/${imageName}`, {
            method: 'POST',
            body: formData,
          });

          if (!imageResponse.ok) {
            throw new Error('Erro ao enviar imagem para o servidor');
          }

          const imageResult = await imageResponse.json();
          imagePath = imageResult.URL;
        }

        const response = await fetch(`${process.env.REACT_APP_API_URL}/planos?id=${plan_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("user_token")}`
          },
          body: JSON.stringify({
            nome: planData.title,
            precoMensal: planData.priceMonth,
            precoAnual: planData.priceYear,
            desconto: planData.discount,
            ativo: true,
            descricao: planData.description,
            imagens: [imagePath]
          }),
        });

        if (!response.ok) {
          throw new Error("Erro ao atualizar plano!");
        }

        toast.success('Salvo', {
          theme: "colored",
        });
      } catch (e) {
        toast.error('Erro ao atualizar plano!');
        console.error("Error:", e);
      }
    } else {
      try {
        let imagePath = '';
        if (imageFile) {
          const formData = new FormData();
          const fileExtension = imageFile.name.split('.').pop();
          const sanitizedTitle = planData.title.replace(/[^a-zA-Z0-9]/g, '_');
          const timestamp = Date.now();
          const randomId = Math.random().toString(36).substring(2, 8);
          const imageName = `${sanitizedTitle}_2_${timestamp}_${randomId}.${fileExtension}`;
          formData.append('imagem', imageFile, imageName);

          const imageResponse = await fetch(`${process.env.REACT_APP_API_URL}/imagens/planos/${imageName}`, {
            method: 'POST',
            body: formData,
          });

          if (!imageResponse.ok) {
            throw new Error('Erro ao enviar imagem para o servidor');
          }

          const imageResult = await imageResponse.json();
          imagePath = imageResult.URL;
        }


        const createResponse = await fetch(`${process.env.REACT_APP_API_URL}/planos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("user_token")}`
          },
          body: JSON.stringify({
            nome: planData.title,
            precoMensal: planData.priceMonth,
            precoAnual: planData.priceYear,
            desconto: planData.discount,
            ativo: true,
            descricao: planData.description,
            imagens: [imagePath]
          }),
        });

        if (!createResponse.ok) {
          throw new Error("Erro ao criar plano!");
        }

        const data = await createResponse.json();
        const imageUrls = await Promise.all(
          data.imagens.map(async (imageUrl) => {
            const imageRes = await fetch(`${process.env.REACT_APP_API_URL}/imagens/${imageUrl}`);
            const imageBlob = await imageRes.blob();
            return URL.createObjectURL(imageBlob);
          })
        );
        setImage(imageUrls);

        toast.success('Salvo', {
          theme: "colored",
        });
      } catch (e) {
        toast.error('Erro ao criar plano!');
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
        <ActionLink to={"/dashboard/plan_dashboard"}>
          <C.Button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </C.Button>
        </ActionLink>
      </MediaQuery>

      <C.ProductContainer>

        <C.Title>Editar Plano</C.Title>

        <C.ProductInfoWrapper>
          <C.ProductInfoColumn>
            <InfoInput title="Nome" name="title" inputInfo={planData.title} onChange={handleInputChange} />
            <InfoInput title="Ativo" type="checkbox" name="active" checked={planData.active} onChange={handleInputChange} />
            <Textarea title="Descrição" name="description" info={planData.description} onChange={handleInputChange} />
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </C.ProductInfoColumn>

          <C.ProductInfoColumn>
            <C.ProductImageContainer>
              <ImageDisplay images={image} />
            </C.ProductImageContainer>

            <C.ProductInfoRow>
              <InfoInput title="Preço Mensal" name="priceMonth" inputInfo={planData.priceMonth} onChange={handleInputChange} />
              <InfoInput title="Preço Anual" name="priceYear" inputInfo={planData.priceYear} onChange={handleInputChange} />
              <InfoInput title="Desconto" name="discount" inputInfo={planData.discount} onChange={handleInputChange} />
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

export default EditPlan;