"use client";

import { FC } from "react";
import style from "./repositoryDetails.module.scss";
import { Badge, IconButton, Typography } from "@mui/material";
import { cn } from "@/lib/clsx.lib";
import { blue2, gold, gray, gray1 } from "@/constants/color.constants";
import useRepository from "@/hooks/request.hooks/useRepository";
import StarIcon from "@mui/icons-material/Star";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import useOutsideClick from "@/hooks/app.hooks/useOutsideClick";

const RepositoryDetails: FC<{ className?: string }> = ({ className }) => {
  const { isShow, setShow } = useOutsideClick(false);
  const { selectedRepository } = useRepository();

  return (
    <div
      className={cn(style.component, className, {
        [style.open]: isShow,
        [style.close]: !isShow,
      })}
    >
      <div className={style.toggle_button} onClick={() => setShow(!isShow)}>
        {isShow ? (
          <IconButton>
            <EastIcon />
          </IconButton>
        ) : (
          <IconButton>
            <WestIcon />
          </IconButton>
        )}
      </div>

      {selectedRepository ? (
        <div className={style.detail}>
          <Typography className={style.detail_title} fontWeight="400">
            {selectedRepository.name}
          </Typography>

          <div className={style.group}>
            {selectedRepository.languages.edges.length !== 0 && (
              <div>
                <Badge
                  sx={{
                    color: "#fff",
                    fontSize: "1.3rem",
                    backgroundColor: blue2,
                    padding: "4px 10px",
                    borderRadius: "25px",
                    marginBottom: "16px",
                  }}
                >
                  {selectedRepository.languages.edges[0].node.name}
                </Badge>

                <ul className={style.languages_list}>
                  {selectedRepository.languages.edges.map((item, i) => (
                    <li key={i}>
                      <Badge
                        sx={{
                          fontSize: "1.3rem",
                          backgroundColor: gray1,
                          padding: "0 10px",
                          borderRadius: "25px",
                        }}
                      >
                        {item.node.name}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={style.stars}>
              <div className={style.stars_wrap}>
                <StarIcon
                  sx={{
                    width: "24px",
                    height: "24px",
                    color: gold,
                  }}
                />
                <Typography fontSize="1.4rem">
                  {new Intl.NumberFormat("ru-RU").format(
                    selectedRepository.stargazerCount
                  )}
                </Typography>
              </div>
            </div>
          </div>

          {selectedRepository.licenseInfo && (
            <Typography fontSize="1.4rem">
              {selectedRepository.licenseInfo.name}
            </Typography>
          )}
        </div>
      ) : (
        <div className={style.empy}>
          <Typography
            fontSize="1.4rem"
            fontWeight="400"
            color={gray}
            textAlign="center"
          >
            Выберите репозиторий
          </Typography>
        </div>
      )}
    </div>
  );
};

export default RepositoryDetails;
