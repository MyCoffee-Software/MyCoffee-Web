import React from 'react'
import * as C from "./styles"

const Input = ({ type, placeholder, value, onChange, disabled }) => {
  return (
    <C.Input
      className='input'
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Input;