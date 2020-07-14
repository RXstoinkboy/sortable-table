import React, { ReactElement } from "react";
import { PersonType } from "../types";
import TableCell, { StyledTableRow } from "./table-row.styles";

interface Props {
  rowData: PersonType
}

export default function TableRow({
  rowData: { name, gender, age, eyeColor, healthRate }
}: Props): ReactElement {
  return (
    <StyledTableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{age}</TableCell>
      <TableCell>{eyeColor}</TableCell>
      <TableCell>{healthRate}</TableCell>
    </StyledTableRow>
  );
}
