import { TablePagination } from "@mui/material";
import { ChangeEvent, FC } from "react";
import style from "./paginate.module.scss";
import { cn } from "@/lib/clsx.lib";

interface PaginateProps {
  className?: string;
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;

  onRowsPerPageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Paginate: FC<PaginateProps> = ({
  className,
  count,
  onPageChange,
  page,
  rowsPerPage,
  onRowsPerPageChange,
}) => {
  return (
    <TablePagination
      className={cn(style.component, className)}
      component="div"
      count={count}
      page={page}
      onPageChange={onPageChange}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
};

export default Paginate;
