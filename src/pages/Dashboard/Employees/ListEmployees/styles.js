import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ActionLink = styled(Link)`
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
`;

export const TableContainer = styled.div`
  margin-right: 50px;
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