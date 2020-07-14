import styled from "styled-components";

const TableCell = styled.td`
  padding: 10px 15px;
  text-align: center;

  &:last-child {
    position: sticky;
    right: 0;
  }

  tr:nth-child(odd) &:last-child {
    background: ${(p) => p.theme.stickyColumnRowBackgroundOdd};
  }

  tr:nth-child(even) &:last-child {
    background: ${(p) => p.theme.stickyColumnRowBackground};
  }
`;

export const StyledTableRow = styled.tr`
  position: relative;
  z-index: -1;

  &:nth-child(odd) {
    background: ${(p) => p.theme.rowBackgroundOdd};
  }
`;

export default TableCell;
