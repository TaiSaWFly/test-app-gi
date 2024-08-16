import { Skeleton, TableCell, TableRow } from "@mui/material";
import { FC } from "react";

interface TableLoadingProps {
  rowLength: number;
  cellLength: number;
}

const TableLoading: FC<TableLoadingProps> = ({ cellLength, rowLength }) => {
  return (
    <>
      {Array.from(Array(rowLength).fill(0)).map((_, i) => (
        <TableRow key={i}>
          {Array.from(Array(cellLength).fill(0)).map((_, i) => (
            <TableCell key={i}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default TableLoading;
