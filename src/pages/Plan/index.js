import React from 'react';
import * as C from "./styles";
import PlanCard from '../../components/Cards/PlanCard';

const Plan = () => {
  const products = ["oi", "oi", "oi", "oi", "oi", "oi", "oi", "oi", "oi", "oi", "oi", "oi", "oi"]

  return (
    <C.Container>
      <C.Header>Escolha sua categoria</C.Header>

      <C.PlansWrapper>
        <C.PlansContent>
          <PlanCard Plans={products} />
        </C.PlansContent>

        <C.PlansContent>
          <PlanCard Plans={products} />
        </C.PlansContent>

        <C.PlansContent>
          <PlanCard Plans={products} />
        </C.PlansContent>
      </C.PlansWrapper>
    </C.Container>
  )
}

export default Plan