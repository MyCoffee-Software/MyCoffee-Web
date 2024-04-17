import styled from "styled-components";
import { device } from "../../../styles/device";

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 4px #aaaaaa;
  background-color: #ffffff;
  padding: 16px;
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 200px;
  border: 1px solid black;
  object-fit: contain;

  @media ${device.lg} {
    max-height: 100px;
  }

  @media ${device.sm} {
    max-height: 70px;
  }
`;

export const Name = styled.label`
  font-family: "Scope One", serif;
  font-weight: 400;
  margin: 16px 0;

  max-width: 100%;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;

  
  line-height: 1.2em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  font-size: calc(15px + 0.290625vw);
`;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  font-family: "Scope One", serif;
  font-weight: 400;
  margin-right: 16px;

  font-size: calc(15px + 0.390625vw);
`;

export const BuyButton = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-radius: 30px;
  background-color:  #ae7347;
  color: white;
  padding: 10px 15px;
  outline: none;
  border: none;
  font-size: calc(15px + 0.290625vw);
  font-family: "Scope One", serif;

  @media ${device.lg} {
    margin-top: 10px;
    padding: 5px 10px;
  }
`;
