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