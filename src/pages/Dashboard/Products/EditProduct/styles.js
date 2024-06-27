import styled from "styled-components";
import { device } from "../../../../styles/device";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #f0f0f0;
  }
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

  @media ${device.md} {
    margin-left: 0px;
    flex-direction: column;
  }
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
  width: 90%;
  gap: 20px;
`;