import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h2`
  font-size: 40px;
  margin-bottom: 40px;
`;

export const PlansWrapper = styled.div`
  width: 100%;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 100px;
`;

export const PlansContent = styled.div`
  flex: 1 1 200px;
  max-width: 350px;
  height: auto;
`;