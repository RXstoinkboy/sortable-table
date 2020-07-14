import styled from "styled-components";
import { PersonType } from "../types";

interface Props {
  width: string;
  id: string;
  sortingDirection: "asc" | "desc";
  currentSortingKey: keyof PersonType;
}

export const StyledHeadCell = styled.div<Props>`
  width: ${(p) => p.width};
  min-width: ${(p) => p.width};
  padding: 10px 20px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;

  &::before {
    content: "";
    position: static;

    width: 0;
    height: 0;
    display: ${({ currentSortingKey, id }) =>
      currentSortingKey === id ? "block" : "none"};

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: ${({ sortingDirection }) =>
      sortingDirection === "desc" ? "5px solid black" : "none"};
    border-top: ${({ sortingDirection }) =>
      sortingDirection === "asc" ? "5px solid black" : "none"};
    margin: auto 0 auto 10px;

    transform: translateY(-50%);
  }
`;

export const StyledHeadCellWrapper = styled.th`
  & {
    background: ${(p) => p.theme.headerBackground};
    color: ${(p) => p.theme.headerTextColor};
  }
  &:last-child {
    position: sticky;
    right: 0;
    background: ${(p) => p.theme.stickyColumnHeaderBackground};
  }
`;
