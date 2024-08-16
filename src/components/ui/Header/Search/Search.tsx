"use client";

import { FC, FormEvent, useState } from "react";
import style from "./search.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { APP_PAGES } from "@/config/page-url.config";
import useRepository from "@/hooks/request.hooks/useRepository";
import useSearchValue from "@/hooks/app.hooks/useSearchValue";

const Search: FC = () => {
  const router = useRouter();
  const { setValue } = useSearchValue();
  const { handleRequestRepository } = useRepository();
  const [searchData, setSearchData] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!!searchData) {
      router.push(APP_PAGES.REPOSITORY);
      setValue(searchData);
      handleRequestRepository(searchData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.search_form}>
        <TextField
          name="search"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          placeholder="Введите поисковый запрос"
          className={style.search_field}
          sx={{
            width: "100%",
            borderRadius: "4px",
            background: "#fff",
          }}
        />

        <Button
          sx={{ fontSize: "1.5rem", padding: "8px 22px" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Искать
        </Button>
      </form>
    </div>
  );
};

export default Search;
