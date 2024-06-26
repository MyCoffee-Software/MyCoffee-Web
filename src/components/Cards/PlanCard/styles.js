import styled from "styled-components";
import { device } from "../../../styles/device"

export const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #000000;
  background-color: #DECDBB;
  padding: 16px;
  width: 100%;
  height: 100%;
`;

export const Name = styled.label`
  font-family: "Scope One", sans-serif;
  font-weight: 400;
  text-align: justify;
  margin: 16px 0;
  font-weight: bold;

  font-size: calc(16px + 0.290625vw);
`;

export const PriceMonthWrapper = styled.div`
  display: flex;
`;

export const PriceMonth = styled.label`
  font-family: "Scope One", sans-serif;
  font-weight: 400;
  text-align: justify;
  margin: 16px 0;
  font-weight: bold;

  font-size: 30px;
`;

export const PriceYear = styled.label`
  font-family: "Scope One", sans-serif;
  font-weight: 400;
  text-align: justify;
  margin: 16px 0;
  font-weight: bold;

  font-size: 18px;
`;

export const ImageContainer = styled.div`
  width: 180px;
  height: 200px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 180px;
  height: 200px;
  border: 2px solid black;
  border-radius: 20px;

`;

export const Iten = styled.li`
  font-family: "Scope One", serif;
  font-weight: 400;
  text-align: justify;
  margin: 5px 0;
  margin-bottom: 20px;

  font-size: calc(14px + 0.290625vw);
`;

export const ButtonWrraper = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;
  width: 100%;

  @media ${device.sm} {
    flex-direction: column;
  }
`;