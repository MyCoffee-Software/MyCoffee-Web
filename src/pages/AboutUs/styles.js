import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-top: -20px;
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
  text-align: justify;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 26px;
`;

export const RightTextBlockContainer = styled.div`
  flex: 1;
  text-align: justify;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 22px
`;
