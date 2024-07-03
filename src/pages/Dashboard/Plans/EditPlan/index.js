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
  const [planImage, setPlanImage] = useState(null);

  useEffect(() => {
    if (plan && plan.imagem) {
      const imageName = plan.imagem.split('/').pop();
      import(`../../../../assets/${imageName}`)
        .then(imageModule => {
          setPlanImage(imageModule.default);
        })
        .catch(error => {
          console.error(`Failed to load image: ${imageName}`, error);
        });
    }
  }, [plan]);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/planos?id=${plan_id}`);
        const data = await response.json();
        setPlan(data);
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
        //category: plan.categoria,
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
            ativo: planData.active,
            descricao: planData.description,
            imagem: planData.image
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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/planos`, {
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
            imagem: "a.png"
          }),
        });

        if (!response.ok) {
          throw new Error("Erro ao criar plano!");
        }

        toast.success('Salvo', {
          theme: "colored",
        });
      } catch (e) {
        toast.error('Erro ao criar plano!');
        console.error("Error:", e);
      }
    }
  }

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
          </C.ProductInfoColumn>

          <C.ProductInfoColumn>
            <C.ProductImageContainer>
              <C.ProductImage src={planImage} />
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