import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const FundadoresGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-end;  
  padding-right: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const FundadorItem = styled.div`
  text-align: center;
`;

export const FundadorItemImg = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
`;

export const CabecalhoContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ImagemFundo = styled.img`
  width: 100%;
  height: auto;
`;

export const Titulo = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Volkhov', serif;
  font-size: 500%;
  color: white;
  text-align: center;
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black;
`;