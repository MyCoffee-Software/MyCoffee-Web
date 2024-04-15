import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 380px;
  grid-template-rows: 140px 80px;
  grid-template-areas: 
    "firstRow"
    "secondRow";
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0px 4px 4px #aaaaaa;
  background-color: #ffffff;
  padding: 16px;
  max-width: 380px;
`;

export const FirstContainer = styled.div`
  grid-area: firstRow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 280px;
  height: 130px;
  border: 1px solid black;
  margin-right: 16px;
`;

export const Name = styled.h2`
  grid-area: name;
  
  font-size: 20px;
  font-family: "Scope One", serif;
  font-weight: 400;
  letter-spacing: 0%;
  margin-right: 16px;
`;

export const SecondContainer = styled.div`
  grid-area: secondRow;
  display: flex;
  align-items: center;
`;

export const Price = styled.p`
  
  font-size: 30px;
  font-family: Scope One, serif;
  font-weight: 400;
  line-height: 120.00000476837158%;
  letter-spacing: 0%;

  width: 200px;
`;

export const BuyButton = styled.div`
  width: 100%;
  text-align: center;
  max-width: 130px;
  cursor: pointer;
  border-radius: 30px;
  background-color:  #ae7347;
  color: white;
  padding: 16px 20px;
  outline: none;
  border: none;
  font-size: 16px;
`;
