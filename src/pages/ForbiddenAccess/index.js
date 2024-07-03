import React from 'react';
import * as C from "./styles";
import img from "../../assets/denied.png";

const ForbiddenAccess = () => {
  return (
    <C.Container>
      <C.Image src={img} alt="Access Denied" />
      <C.Title>Acesso Negado</C.Title>
      <C.Message>Você não tem permissão para acessar esta página.</C.Message>
      <C.Button onClick={() => window.location.href = '/'}>Voltar para Início</C.Button>
    </C.Container>
  );
}

export default ForbiddenAccess;
