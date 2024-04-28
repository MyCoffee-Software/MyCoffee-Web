import React from 'react';
import * as C from "./styles"
import { Input } from '../Input/styles';

const InfoInput = ({ title, inputInfo, disabled }) => {
  return (
    <C.UserInfoContainer>
      <C.UserInfoTitle>{title}</C.UserInfoTitle>
      <Input type="text" value={inputInfo} disabled={disabled} />
    </C.UserInfoContainer>
  );
};

export default InfoInput;