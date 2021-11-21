import React, { FC } from "react";
import { CellComponent } from "./CellComponent";

interface CellProps {
  id: number;
  isActive: boolean;
}

export const Cell: FC<CellProps> = ({ id, isActive }) => {
  return (
    <CellComponent
      isActive={isActive}
      data-cellid={id}
      data-testid={`cell-${id}`}
    >
      {isActive && "*"}
    </CellComponent>
  );
};
