import { FC, ReactNode, useEffect, useState } from "react";
import { SortByFieldType, SortType } from "@/@types/app.types";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { IconButton, Badge } from "@mui/material";
import { initialStateSortByData } from "@/data/initialState.data";

interface TableSortBageProps {
  headerId: string;
  headerContent: ReactNode | JSX.Element | null;
  sortBy: SortByFieldType;
  onSortBy: (sort: SortByFieldType) => void;
}

const TableSortBage: FC<TableSortBageProps> = ({
  onSortBy,
  sortBy,
  headerId,
  headerContent,
}) => {
  const [sortByData, setSortByData] = useState(sortBy);

  const handleToggleSort = (sort?: SortType) => {
    onSortBy({
      field: headerId,
      sort: sort === "asc" ? "desc" : "asc",
    });
  };

  useEffect(() => {
    if (sortBy.field === headerId) {
      setSortByData(sortBy);
    } else {
      setSortByData(initialStateSortByData);
    }
  }, [sortBy]);

  return (
    <Badge
      sx={{ gap: "5px", cursor: "pointer" }}
      onClick={() => handleToggleSort(sortByData.sort)}
    >
      <div>
        {sortByData.sort && sortByData.field === headerId ? (
          <>
            {sortByData.sort === "asc" ? (
              <IconButton sx={{ padding: "0" }}>
                <NorthIcon />
              </IconButton>
            ) : (
              <IconButton sx={{ padding: "0" }}>
                <SouthIcon />
              </IconButton>
            )}
          </>
        ) : (
          <>
            <IconButton sx={{ padding: "0", rotate: "90deg" }}>
              <SyncAltIcon />
            </IconButton>
          </>
        )}
      </div>

      <span>{headerContent}</span>
    </Badge>
  );
};

export default TableSortBage;
