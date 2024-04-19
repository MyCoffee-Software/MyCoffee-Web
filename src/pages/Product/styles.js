import styled from "styled-components"

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 70%;
`;

export const ProcutContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  width: 55%;
`;

export const Image = styled.img`
  max-width: 80%;
  height: auto;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  margin-left: 20px;
  text-align: justify;
  padding-top: 30px;
`;

export const Label = styled.label`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.fontColor || 'black'};

  display: block;
  margin-bottom: 10px;
`;

export const line = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  gap: 10px;
`;

export const BuyButton = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
  border-radius: 30px;
  background-color:  #B77A4D;
  color: white;
  padding: 10px 15px;
  outline: none;
  border: 2px solid #94623D;
  font-size: calc(15px + 0.290625vw);
  font-family: "Scope One", serif;
`;