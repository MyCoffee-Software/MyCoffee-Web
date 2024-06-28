import React from 'react';
import * as C from "./styles"
import Input from '../Input';

const InfoInput = ({ title, inputInfo, disabled, onChange, name, type="text" }) => {
  return (
    <C.UserInfoContainer>
      <C.UserInfoTitle>{title}</C.UserInfoTitle>
      <Input name={name} type={type} value={inputInfo} disabled={disabled} onChange={onChange} />
    </C.UserInfoContainer>
  );
};

export default InfoInput;