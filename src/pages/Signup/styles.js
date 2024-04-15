import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
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
`;

export const ContentHalf = styled(Half)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
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
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.fontColor || '#676767'};
  font-weight: ${(props) => props.fontWeight || '500'};

  font-family: "Inter", sans-serif;
  letter-spacing: 0%;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;