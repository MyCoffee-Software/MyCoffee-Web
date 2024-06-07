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

export const FounderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
`;

export const Founder = styled.div`
  flex: 1;
  font-size: 16px;
  padding: 15px;
`;

export const FounderImage = styled.img`
  width: 150px;
  height: 150px;
  font-weight: 800;
  border-radius: 50%;
  margin-bottom: 10px;
  margin: 0 20px;
`;