import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 35px;
  font-weight: bold;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 90%;
`;

export const ProductInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
`;

export const ProductInfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;