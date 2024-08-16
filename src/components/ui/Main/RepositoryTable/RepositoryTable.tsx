import { FC } from "react";
import style from "./repositoryTable.module.scss";
import Table from "@/components/common/Table/Table";
import { ColumnDef } from "@tanstack/react-table";
import { SortByFieldType } from "@/@types/app.types";
import { IRepository } from "@/@types/IRepository";
import { formattedDate } from "@/utils/formattedDate";

interface RepositoryTableProps {
  isLoading: boolean;
  data: IRepository[];
  sortBy: SortByFieldType;
  onSortBy: (sort: SortByFieldType) => void;
  selectedRepository: IRepository | null;
  onSelectedRepository: (repository: IRepository) => void;
}

const RepositoryTable: FC<RepositoryTableProps> = ({
  isLoading,
  data,
  sortBy,
  onSortBy,
  selectedRepository,
  onSelectedRepository,
}) => {
  const columns: ColumnDef<IRepository, any>[] = [
    {
      id: "name",
      header: () => "Название",
      cell: ({ row }) => row.original.name,
      enableSorting: false,
      accessorKey: "name",
    },
    {
      id: "languages",
      header: () => "Язык",
      cell: ({ row }) =>
        row.original.languages.edges.length !== 0
          ? row.original.languages.edges[0].node.name
          : "",
      enableSorting: false,
      accessorKey: "languages",
    },
    {
      id: "forks",
      header: () => "Число форков",
      cell: ({ row }) => row.original.forkCount,
      accessorKey: "forkCount",
    },
    {
      id: "stars",
      header: () => "Число звезд",
      cell: ({ row }) => row.original.stargazerCount,
      accessorKey: "stargazerCount",
    },
    {
      id: "updated",
      header: () => "Дата обновления",
      cell: ({ row }) => formattedDate(row.original.updatedAt),
      accessorKey: "updatedAt",
    },
  ];

  return (
    <div className={style.component}>
      <Table
        {...{
          className: style.table,
          data,
          sortBy,
          columns,
          onSortBy,
          selectedKey: "id",
          selected: selectedRepository?.id,
          onClick: onSelectedRepository,
          isLoading,
        }}
      />
    </div>
  );
};

export default RepositoryTable;
