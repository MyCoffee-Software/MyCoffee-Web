import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 4px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Label = styled.label`
  flex-grow: 1;
  margin: 0 12px;
  font-size: 18px;
  text-align: center;
`;

export const Quantity = styled.span`
  margin: 0 12px;
  font-size: 18px;
`;