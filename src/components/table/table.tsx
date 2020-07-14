import React, { ReactElement, useState, useMemo } from "react";
import StyledTable from "./table.styles";
import TableHead from "./table-head";
import TableBody from "./table-body";
import { TableConfig, TableData, PersonType } from "./types";

interface Props {
  tableConfig: TableConfig;
  tableData: TableData;
}

type SortingKeyType = keyof PersonType;
type SortingDirectionType = "asc" | "desc";

export default function Table({ tableConfig, tableData }: Props): ReactElement {
  const [currentSortingKey, setCurrentSortingKey] = useState<SortingKeyType>(
    "name"
  );
  const [sortingDirection, setSortingDirection] = useState<
    SortingDirectionType
  >("asc");
  const [sortedTableData, setSortedTableData] = useState<TableData>(tableData);
  const [animate, setAnimate] = useState<boolean>(true)

  const changeSortingDirection = () => {
    sortingDirection === "asc"
      ? setSortingDirection("desc")
      : setSortingDirection("asc");
  };

  // update sorting configuration
  const handleClick = (
    event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>
  ) => {
    if (currentSortingKey !== null) changeSortingDirection(); // prevent first click from changing sorting direction. Otherwise change sorting direction
    if (currentSortingKey !== event.currentTarget.id)
      setSortingDirection("asc"); // change sorting direstion to default 'asc' if sortingKey has been changed
    setCurrentSortingKey(event.currentTarget.id as SortingKeyType);
    setAnimate(true)
  };

  const handleEndAnimation = () => {
    setAnimate(false)
  }

  // actual sorting function
  useMemo(() => {
    let sortedData = [...tableData];
    sortedData.sort((a, b) => {
      if (a[currentSortingKey] < b[currentSortingKey])
        return sortingDirection === "asc" ? -1 : 1;
      if (a[currentSortingKey] > b[currentSortingKey])
        return sortingDirection === "asc" ? 1 : -1;
      return 0;
    });

    setSortedTableData(sortedData);
  }, [currentSortingKey, sortingDirection, tableData]);

  return (
    <div>
      <StyledTable>
        <TableHead
          currentSortingKey={currentSortingKey}
          tableConfig={tableConfig}
          handleClick={handleClick}
          sortingDirection={sortingDirection}
        />
        <TableBody tableData={sortedTableData} animate={animate} handleEndAnimation={handleEndAnimation} />
      </StyledTable>
    </div>
  );
}
