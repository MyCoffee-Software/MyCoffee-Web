import React from 'react';
import * as C from "./styles";

const Textarea = ({ title, name, info, onChange }) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Textarea name={name} value={info} onChange={onChange}></C.Textarea>
    </C.Container>
  );
};

export default Textarea;