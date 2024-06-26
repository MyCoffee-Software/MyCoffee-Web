import React, { useEffect, useState } from 'react';
import * as C from "./styles";
import PlanCard from '../../components/Cards/PlanCard';

const Plan = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/planos?limite=10&pagina=1`);
        const data = await response.json();
        setPlans(data);
      } catch (e) {
        console.error("Error");
      }
    };

    fetchPlans();
  }, [])

  return (
    <C.Container>
      <C.Header>Escolha sua categoria</C.Header>

      <C.PlansWrapper>
        {plans.map((plan) => (
          <C.PlansContent>
            <PlanCard plan={plan}/>
          </C.PlansContent>
        ))}
      </C.PlansWrapper>
    </C.Container>
  )
}

export default Plan