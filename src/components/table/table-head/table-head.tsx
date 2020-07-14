import React, { ReactElement } from "react";
import { TableConfig, PersonType } from "../types";
import { StyledHeadCell, StyledHeadCellWrapper } from "./table-head.styles";

interface Props {
  tableConfig: TableConfig;
  currentSortingKey: keyof PersonType;
  sortingDirection: "asc" | "desc";
  handleClick: (
    event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>
  ) => void;
}

export default function TableHead({
  tableConfig,
  currentSortingKey,
  sortingDirection,
  handleClick,
}: Props): ReactElement {
  return (
    <thead>
      <tr>
        {tableConfig.map((el, index) => (
          <StyledHeadCellWrapper key={index}>
            <StyledHeadCell
              currentSortingKey={currentSortingKey}
              onClick={handleClick}
              sortingDirection={sortingDirection}
              id={el.name}
              width={el.width}
            >
              {el.label}
            </StyledHeadCell>
          </StyledHeadCellWrapper>
        ))}
      </tr>
    </thead>
  );
}
