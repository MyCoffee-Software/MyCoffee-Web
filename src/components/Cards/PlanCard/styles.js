import styled from "styled-components";

export const PlanWrapper = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #000000;
  background-color: #DECDBB;
  padding: 16px;
  width: 100%;
  height: 100%;
`;

export const Name = styled.label`
  font-family: "Scope One", sans-serif;
  font-weight: 400;
  text-align: justify;
  margin: 16px 0;
  font-weight: bold;

  font-size: calc(15px + 0.290625vw);
`;

export const Iten = styled.li`
  font-family: "Scope One", serif;
  font-weight: 400;
  text-align: justify;
  margin: 5px 0;

  font-size: calc(12px + 0.290625vw);
`;

export const ButtonWrraper = styled.div`
  margin-top: auto;
`;