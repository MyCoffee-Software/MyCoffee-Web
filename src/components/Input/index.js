import React from 'react'
import * as C from "./styles"

const Input = ({ type, placeholder, value, onChange, disabled, name }) => {
  return (
    <C.Input
      className='input'
      defaultValue={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
    />
  );
};

export default Input;