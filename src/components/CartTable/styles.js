import styled from 'styled-components';
import DataTable from 'react-data-table-component';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const Table = styled(DataTable)`
  .rdt_Table {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: auto;
  border-radius: 5px;
`;