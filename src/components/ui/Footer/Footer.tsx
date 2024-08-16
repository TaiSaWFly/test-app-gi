import { FC } from "react";
import style from "./footer.module.scss";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className={style.component}>
      <Typography
        fontSize={"1.3rem"}
        sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
      >
        <span>Created by</span>
        <Link
          className={style.link}
          href={"https://github.com/TaiSaWFly"}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon /> <span>TaiSaWFly</span>
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
