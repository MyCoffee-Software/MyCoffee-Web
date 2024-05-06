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
`;

export const TextsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LeftTextBlockContainer = styled.div`
  flex: 1;
  margin-right: 10px;
`;

export const RightTextBlockContainer = styled.div`
  flex: 1;
  margin-left: 10px;
`;