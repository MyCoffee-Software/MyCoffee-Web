import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.div`
  display: flex;
  height: 170vh;

  @media ${device.sm} {
    flex-direction: column;
  }

  @media ${device.md} {
    flex-direction: column;
  }
`;

export const Half = styled.div`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
`;

export const LogoHalf = styled(Half)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #decdbb;

  @media ${device.sm} {
    max-height: 200px;
    border-bottom-left-radius: 47px;
  }

  @media ${device.md} {
    max-height: 300px;
    border-bottom-left-radius: 47px;
  }
`;

export const ContentHalf = styled(Half)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Logo = styled.img`
  max-width: 50%;
  max-height: 50%;
`;

export const Content = styled.div`
  gap: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: white;
  max-width: 430px;
  padding: 20px;
`;

export const LabelContent = styled.div`
  text-align: left;
  gap: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.fontColor || "#676767"};
  font-weight: ${(props) => props.fontWeight || "500"};

  font-family: "Inter", sans-serif;
  letter-spacing: 0%;

  @media ${device.sm} {
    font-size: ${(props) => props.mobileFontSize || "12px"};
  }
`;
