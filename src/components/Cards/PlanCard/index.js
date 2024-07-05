import React, { useEffect, useState } from 'react';
import * as C from "./styles"
import Button from "../../Button"
import { formatCurrency } from '@brazilian-utils/brazilian-utils';
import useAuth from '../../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';
import ImageDisplay from '../../ImageDisplay';

const PlanCard = ({ plan }) => {
  const { user } = useAuth();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = await Promise.all(
          plan.imagens.map(async (imageUrl) => {
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
  }, [plan]);

  const handleBuyMonth = async () => {
    try {
      if (!user) {
        throw Error("Precisa estar logado para comprar!");
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/carrinho/plano`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`
        },
        body: JSON.stringify({ idCliente: user.id, idPlano: plan.id, periodo: "Mensal" }),
      });

      if (!response.ok) {
        throw Error("Erro ao adicionar produto ao carrinho!");
      }

      toast.success("Produto adicionado ao carrinho!");
    } catch (e) {
      toast.error(e.message);
    }
  }

  const handleBuyYear = async () => {
    try {
      if (!user) {
        throw Error("Precisa estar logado para comprar!");
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/carrinho/plano`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`
        },
        body: JSON.stringify({ idCliente: user.id, idPlano: plan.id, periodo: "Anual" }),
      });

      if (response.status === 409) {
        await fetch(`${process.env.REACT_APP_API_URL}/carrinho/plano`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("user_token")}`
          },
          body: JSON.stringify({ idCliente: user.id, idPlano: plan.id, periodo: "Anual" }),
        });

        toast.success("Produto adicionado ao carrinho!");
        return;
      }

      if (!response.ok) {
        throw Error("Erro ao adicionar produto ao carrinho!");
      }

      toast.success("Produto adicionado ao carrinho!");
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <C.PlanWrapper>
      <ToastContainer />
      <C.Name>{plan.nome}</C.Name>

      <C.PriceMonthWrapper>
        <C.PriceMonth>R$ {formatCurrency(plan.precoMensal)}</C.PriceMonth>
        <C.PriceYear>/Mês</C.PriceYear>
      </C.PriceMonthWrapper>

      <C.PriceMonthWrapper>
        <C.PriceMonth>R$ {formatCurrency(plan.precoAnual)}</C.PriceMonth>
        <C.PriceYear>/Ano</C.PriceYear>
      </C.PriceMonthWrapper>

      <C.ImageContainer>
        <ImageDisplay images={images} />
      </C.ImageContainer>

      <C.Iten>{plan.descricao}</C.Iten>

      <C.ButtonWrraper>
        <Button onClick={handleBuyMonth} Text="Mensal"></Button>
        <Button onClick={handleBuyYear} Text="Anual"></Button>
      </C.ButtonWrraper>
    </C.PlanWrapper>
  )
}

export default PlanCard