"use client";

import { FC, useEffect } from "react";
import Paginate from "@/components/common/Paginate/Paginate";
import usePaginate from "@/hooks/app.hooks/usePaginate";
import useSortBy from "@/hooks/app.hooks/useSortBy";
import useRepository from "@/hooks/request.hooks/useRepository";
import { Typography } from "@mui/material";
import RepositoryTable from "../RepositoryTable/RepositoryTable";
import { cn } from "@/lib/clsx.lib";
import style from "./repositoryTablePaginate.module.scss";
import { toastNotify } from "@/lib/toast";

const RepositoryTablePaginate: FC<{ className?: string }> = ({ className }) => {
  const { sortBy, handleSortBy } = useSortBy();
  const { currentPage, handleChangePage, pageSize, handleChangeRowsPerPage } =
    usePaginate();
  const {
    repositoryData,
    error,
    isLoading,
    repositoryCount,
    setSelectedRepository,
    selectedRepository,
  } = useRepository(currentPage);

  useEffect(() => {
    if (error) {
      toastNotify.error(error.message, { richColors: true, closeButton: true });
    }
  }, [error]);

  return (
    <div className={cn(className)}>
      {repositoryData.length !== 0 ? (
        <div className={style.group}>
          <RepositoryTable
            isLoading={isLoading}
            data={repositoryData}
            sortBy={sortBy}
            onSortBy={handleSortBy}
            selectedRepository={selectedRepository}
            onSelectedRepository={setSelectedRepository}
          />

          {repositoryCount && (
            <Paginate
              count={repositoryCount}
              page={currentPage}
              onPageChange={handleChangePage}
              rowsPerPage={pageSize}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </div>
      ) : error ? (
        <Typography fontSize="2.8rem" align="center">
          Вознилка ошибка...
        </Typography>
      ) : (
        <Typography fontSize="2.8rem" align="center">
          Введите запрос...
        </Typography>
      )}
    </div>
  );
};

export default RepositoryTablePaginate;
