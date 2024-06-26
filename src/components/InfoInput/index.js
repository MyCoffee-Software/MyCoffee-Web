import React from 'react';
import * as C from "./styles"
import Input from '../Input';

const InfoInput = ({ title, inputInfo, disabled, onChange }) => {
  return (
    <C.UserInfoContainer>
      <C.UserInfoTitle>{title}</C.UserInfoTitle>
      <Input type="text" value={inputInfo} disabled={disabled} onChange={onChange} />
    </C.UserInfoContainer>
  );
};

export default InfoInput;