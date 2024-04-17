import styled from "styled-components";
import { device } from "../../styles/device"

export const ProductsWrapper = styled.div`
  width: 100%;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 20px;

  @media ${device.lg} {
    padding-left: 30px;
    padding-right: 30px;
    gap: 10px
  }

  @media ${device.sm} {
    padding-left: 10px;
    padding-right: 10px;
    gap: 10px;
  }
`;

export const ProductsContent = styled.div`
  flex: 1 1 200px;
  min-width: 250px;
  max-width: 350px;
  height: 400px;

  @media ${device.lg} {
    flex: 1 1 150px;
    min-width: 210px;
    height: 350px;
  }

  @media ${device.sm} {
    flex: 1 1 100px;
    min-width: 160px;
    height: 250px;
  }
`;