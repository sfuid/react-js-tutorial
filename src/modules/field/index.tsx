import React, { useState, FC } from "react";
import { FieldComponent } from "./FieldComponent";
import { Cell } from "./components/Cell";

interface FieldProps {
  size: number;
}

export const Field: FC<FieldProps> = ({ size }) => {
  const [cells, setCell] = useState([]);

  const handleClickCell = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const id = Number(target.getAttribute("data-cellid"));

    if (id) {
      const set = new Set(cells);
      if (set.has(id)) set.delete(id);
      else set.add(id);

      setCell([...set]);
    }
  };

  return (
    <FieldComponent onClick={handleClickCell}>
      {Array(size)
        .fill(0)
        .map((_, i) => (
          <Cell id={i} isActive={cells.find((cell) => cell === i)} key={i} />
        ))}
    </FieldComponent>
  );
};
