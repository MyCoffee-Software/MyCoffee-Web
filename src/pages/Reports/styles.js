import styled from 'styled-components';

export const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2em;
  color: #4a4a4a;
  margin-bottom: 20px;
`;
 
export const ReportCard = styled.div`
  background-color: #d3b8ae;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  width: 1053px; 
  height: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  margin: 0 10px;
  cursor: pointer;

  img {
    width: 67px;
    height: 67px;
  }
`;
