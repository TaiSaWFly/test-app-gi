import { gray } from "@/constants/color.constants";
import { Typography } from "@mui/material";
import { FC } from "react";
import style from "./mainPage.module.scss";

const MainPage: FC = () => {
  return (
    <section className={style.component}>
      <Typography className={style.title} textAlign="center" color={gray}>
        Добро пожаловать
      </Typography>
    </section>
  );
};

export default MainPage;
