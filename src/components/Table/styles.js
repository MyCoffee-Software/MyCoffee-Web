import DataTable from "react-data-table-component";
import styled from "styled-components";
import { device } from "../../styles/device"

export const Title = styled.div`
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 10px;

  @media ${device.md} {
    font-size: 28px;
  }

  @media ${device.sm} {
    font-size: 24px;
  }
`; 

export const Table = styled(DataTable)`
  position: relative;
  z-index: 1;

  .rdt_TableRow {
    &:hover {
      background-color: #e0e0e0;
    }
  }

  .rdt_TableHeader, .rdt_TableCol {
    font-size: 16px;

    @media ${device.md} {
      font-size: 14px;
    }

    @media ${device.sm} {
      font-size: 12px;
    }
  }

  .rdt_TableCell {
    padding: 8px 16px;

    @media ${device.md} {
      padding: 6px 12px;
    }

    @media ${device.sm} {
      padding: 4px 8px;
    }
  }
`;