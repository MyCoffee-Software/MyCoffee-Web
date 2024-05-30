import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  font-size: 18px;
  color: black;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const Textarea = styled.textarea`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  border: none;
  height: 200px;
  resize: none;
`;