// src/pages/Cart/styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const TableContainer = styled.div`
  width: 70%;
`;

export const ActionLink = styled(Link)`
  margin-right: 10px;
  color: blue;
  text-decoration: none;

  &:hover {
    color: darkblue;
  }
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;

  &:hover {
    color: darkred;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const SummaryContainer = styled.div`
  margin-right: 1px;
  width: 25%;
  padding: 0px 20px 20px 20px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: #EFE6DD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `;
  
  export const SummaryTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 20px;
  width: 100%;
  border-radius: 20px;
  background: #DECDBB;
  margin-bottom: 20px;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const CheckoutButton = styled.button`
  padding: 20px 10px;
  background-color: #AE7347;
  font-size: 80%;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  margin-right: 20%;
  margin-left: 20%;


  &:hover {
    background-color: #67442B;
  }
`;