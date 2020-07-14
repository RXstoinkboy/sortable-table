import React, { ReactElement } from "react";
import { TableData } from "../types";
import TableRow from "../table-row";

interface Props {
  tableData: TableData
}

export default function TableBody({
  tableData,
}: Props): ReactElement {
  return (
    <tbody>
      {tableData.map((rowData, index) => (
        <TableRow
          key={index}
          rowData={rowData}
        />
      ))}
    </tbody>
  );
}
