import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { SortByFieldType } from "@/@types/app.types";
import TableSortBage from "./TableSortBage";
import TableLoading from "./TableLoading";

export interface TableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T, any>[];
  selectedKey?: keyof T;
  selected?: string;
  isLoading?: boolean;
  className?: string;
  sortBy?: SortByFieldType;
  onSortBy?: (sort: SortByFieldType) => void;
  onClick?: (data: T) => void;
}

const Table = <T extends object>({
  data,
  columns,
  className,
  sortBy,
  onSortBy,
  onClick,
  selectedKey,
  selected,
  isLoading,
}: TableProps<T>) => {
  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <MuiTable className={className}>
      <TableHead>
        {getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableCell key={header.id}>
                {header.column.getCanSort() && sortBy && onSortBy ? (
                  <TableSortBage
                    headerId={header.id}
                    headerContent={
                      header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )
                    }
                    sortBy={sortBy}
                    onSortBy={onSortBy}
                  />
                ) : (
                  <span>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </span>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {!isLoading ? (
          getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => onClick && onClick(row.original)}
              selected={
                selectedKey && selected
                  ? row.original[selectedKey] === selected
                  : false
              }
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableLoading rowLength={10} cellLength={columns.length} />
        )}
      </TableBody>
    </MuiTable>
  );
};

export default Table;
