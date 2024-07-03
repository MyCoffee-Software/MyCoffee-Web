import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #343a40;
`;

export const Message = styled.p`
  font-size: 1.2em;
  color: #6c757d;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #ae7347;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #ae7347;
  }
`;
