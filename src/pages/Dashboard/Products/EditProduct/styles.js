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

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 90%;
  background-color: blue;
`;

export const ProductInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 200%;
  padding: 0 10px;
`;