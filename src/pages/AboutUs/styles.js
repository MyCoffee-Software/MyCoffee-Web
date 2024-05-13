import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerContainer = styled.div`
  max-width: 100%; /* Largura máxima do contêiner */
  margin: 0 auto; /* Centraliza o contêiner horizontalmente */
  flex: 1;
`;

export const BannerImage = styled.img`
  width: 100%; 
  height: auto;
  margin: 0 auto;
  margin-top: -20px; /* Diminui o espaço acima do banner */
  margin-bottom: 20px;
`;

export const TextsContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const LeftTextBlockContainer = styled.div`
  flex: 3;
  margin: 0 10px;
  height: 100%; /* Adiciona altura para garantir que os elementos filhos se expandam */
`;

export const RightTextBlockContainer = styled.div`
  flex: 1;
  margin: 0 10px;
  height: 100%; /* Adiciona altura para garantir que os elementos filhos se expandam */
`;
