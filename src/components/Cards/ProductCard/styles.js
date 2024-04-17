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
  width: 100%;
  height: 100%;

  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  width: 180px;
  height: 200px;

  @media ${device.lg} {
    width: 100px;
    height: 120px;
  }

  @media ${device.sm} {
    width: 50px;
    height: 70px;
  }
`;

export const Image = styled.img`
  width: 180px;
  height: 200px;
  object-fit: contain;

  @media ${device.lg} {
    width: 100px;
    height: 120px;
  }

  @media ${device.sm} {
    width: 50px;
    height: 70px;
  }
`;

export const NameContainer = styled.div`
  width: 220px;
  height: 120px;

  @media ${device.lg} {
    width: 190px;
    height: 120px;
  }

  @media ${device.sm} {
    width: 140px;
    height: 90px;
  }
`;

export const Name = styled.label`
  font-family: "Scope One", serif;
  font-weight: 400;
  text-align: justify;
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
  font-weight: 600;
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
  border: 2px solid #4A0404;
  font-size: calc(15px + 0.290625vw);
  font-family: "Scope One", serif;

  @media ${device.lg} {
    margin-top: 10px;
    padding: 5px 10px;
  }
`;

export const line = styled.hr`
  height: 2px;
  width: 100%;
  border-width: 0;
  background-color: #6E260E;

  margin-top: 10px;
  margin-bottom: -5px;
`;
