import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ActionLink = styled(Link)`
  color: #007bff;
  cursor: pointer;
  padding: 5px;
  margin: 0 5px;
  &:hover {
    color: #0056b3;
  }
`;

export const TableContainer = styled.div`
  margin-right: 50px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: ${(props) => props.inputWidth || '30%'};

  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  outline: none;
  margin-right: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SaveIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
`;