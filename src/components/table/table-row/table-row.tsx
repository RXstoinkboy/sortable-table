import React, { ReactElement } from "react";
import { PersonType } from "../types";
import TableCell, { StyledTableRow } from "./table-row.styles";

interface Props {
  rowData: PersonType
  animate: boolean
  animationDelay: number
  iAmLast: boolean
  handleEndAnimation: () => void
}

export default function TableRow({
  rowData: { name, gender, age, eyeColor, healthRate },
  animate,
  animationDelay,
  iAmLast = false,
  handleEndAnimation
}: Props): ReactElement {
  return (
    <StyledTableRow onAnimationEnd={() => {if(iAmLast) handleEndAnimation()}}>
      <TableCell animate={animate} animationDelay={animationDelay}>{name}</TableCell>
      <TableCell animate={animate} animationDelay={animationDelay}>{gender}</TableCell>
      <TableCell animate={animate} animationDelay={animationDelay}>{age}</TableCell>
      <TableCell animate={animate} animationDelay={animationDelay}>{eyeColor}</TableCell>
      <TableCell animate={animate} animationDelay={animationDelay}>{healthRate}</TableCell>
    </StyledTableRow>
  );
}
