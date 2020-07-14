import React, { ReactElement } from "react";
import { TableData } from "../types";
import TableRow from "../table-row";

interface Props {
  tableData: TableData
  animate: boolean
  handleEndAnimation: () => void
}

export default function TableBody({
  tableData,
  animate,
  handleEndAnimation
}: Props): ReactElement {
  return (
    <tbody>
      {tableData.map((rowData, index) => (
        <TableRow
          key={index}
          rowData={rowData}
          animate={animate}
          animationDelay={index}
          iAmLast={tableData.length === (index + 1) ? true : false}
          handleEndAnimation={handleEndAnimation}
        />
      ))}
    </tbody>
  );
}
