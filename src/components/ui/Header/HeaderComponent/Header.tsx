"use client";

import { FC } from "react";
import style from "./header.module.scss";
import Search from "../Search/Search";

const Header: FC = () => {
  return (
    <header className={style.component}>
      <Search />
    </header>
  );
};

export default Header;
