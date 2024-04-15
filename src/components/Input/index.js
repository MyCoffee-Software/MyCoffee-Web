import React from 'react'
import * as C from "./styles"

const SignInput = ({ type, placeholder, value, onChange }) => {
  return (
    <C.Input
      className='input'
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default SignInput;