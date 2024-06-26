import React from 'react';
import * as C from "./styles"
import Button from "../../Button"
import { formatCurrency } from '@brazilian-utils/brazilian-utils';

const PlanCard = ({ plan }) => {
  const imagePath = require(`../../../assets/${plan.imagem.split('/').pop()}`);

  return (
    <C.PlanWrapper>
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
        <Button Text="Mensal"></Button>
        <Button Text="Anual"></Button>
      </C.ButtonWrraper>
    </C.PlanWrapper>
  )
}

export default PlanCard