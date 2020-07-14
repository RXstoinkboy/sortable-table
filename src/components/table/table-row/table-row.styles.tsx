import styled, {keyframes, css} from "styled-components";

const fadeIn = keyframes`
  from{
    color: transparent
  }
`

const TableCell = styled.td<Props>`
  padding: 10px 15px;
  text-align: center;
  
  ${(p) => p.animate ? animationMixin : ''};
  animation-delay: ${(p) => p.animationDelay * 100}ms;

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

type Props = {
  animate: boolean
  animationDelay: number
}

const animationMixin = css`
  animation: ${fadeIn} 1s ease-in-out forwards;
`

export const StyledTableRow = styled.tr`
  position: relative;
  z-index: -1;

  &:nth-child(odd) {
    background: ${(p) => p.theme.rowBackgroundOdd};
  }
`;

export default TableCell;
