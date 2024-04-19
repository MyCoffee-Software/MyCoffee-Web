import React, { useState } from "react";
import * as C from "./styles";

export const QuantitySelector = ( { quantity, onQuantityChange } ) => {
  const decrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const increment = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <C.ButtonWrapper>
      <C.Container>
        <C.Button onClick={decrement}>-</C.Button>
        <C.Label>{quantity}</C.Label>
        <C.Button onClick={increment}>+</C.Button>
      </C.Container>
    </C.ButtonWrapper>
  );
}

export default QuantitySelector;