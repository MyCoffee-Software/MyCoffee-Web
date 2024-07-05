import React from 'react';
import * as C from "./styles"
import Button from "../../Button"
import { formatCurrency } from '@brazilian-utils/brazilian-utils';
import useAuth from '../../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';

const PlanCard = ({ plan }) => {
  const { user } = useAuth();

  let imagePath = null;
  /*
  const imageName = plan.imagem.split('/').pop();

  if (imageName && imageName.trim() !== "") {
    try {
      imagePath = require(`../../../assets/${imageName}`);
    } catch (error) {
      console.error(`Failed to load image: ${imageName}`, error);
    }
  }*/

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
      <ToastContainer/>
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
        <C.Image src={imagePath} alt={plan.nome} />
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