import React from 'react';
import * as C from "./styles"
import Button from "../../Button"

const PlanCard = ({ Plans }) => {
  return (
    <C.PlanWrapper>
      <C.Name>Plano Mensal</C.Name>

      { Plans.map((iten) => (
          <C.Iten>oi</C.Iten>
      ))}

      <C.ButtonWrraper>
        <Button Text="Assinar Mensal"></Button> 
      </C.ButtonWrraper>
    </C.PlanWrapper>
  )
}

export default PlanCard