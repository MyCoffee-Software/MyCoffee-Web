import DataTable from "react-data-table-component";
import styled from "styled-components";

export const Title = styled.div`
  text-align: center;
  font-size: 30px;
  margin-bottom: 10px;
`; 

export const Table = styled(DataTable)`
  position: relative;
  z-index: 1;

  .rdt_TableRow {
    &:hover {
      background-color: #e0e0e0;
    }
  }
`;