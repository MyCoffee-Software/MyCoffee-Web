import React from 'react'
import * as C from "./styles"

const Input = ({ type, placeholder, value, onChange, disabled, name, onKeyDown }) => {
  return (
    <C.Input
      className='input'
      defaultValue={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;