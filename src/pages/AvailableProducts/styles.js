import styled from "styled-components";
import { device } from "../../styles/device"

export const ProductsWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 20px;

  @media ${device.lg} {
    gap: 10px
  }
`;

export const ProductsContent = styled.div`
  flex: 1 1 200px;
  max-width: 280px;
  height: 400px;

  @media ${device.lg} {
    flex: 1 1 150px;
    max-width: 250px;
    height: 300px;
  }

  @media ${device.sm} {
    flex: 1 1 100px;
    max-width: 160px;
    height: 250px;
  }
`;