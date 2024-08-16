import { FC } from "react";
import style from "./repositoryPage.module.scss";
import { Typography } from "@mui/material";
import RepositoryTablePaginate from "@/components/ui/Main/RepositoryTablePaginateComponent/RepositoryTablePaginate";
import RepositoryDetails from "@/components/ui/Main/RepositoryDetails/RepositoryDetailsComponent/RepositoryDetails";

const RepositoryPage: FC = () => {
  return (
    <section className={style.component}>
      <div className={style.table_paginate}>
        <Typography className={style.title}>Результаты поиска</Typography>
        <RepositoryTablePaginate className={style.table_paginate_component} />
      </div>

      <RepositoryDetails className={style.table_details} />
    </section>
  );
};

export default RepositoryPage;
