import { useState, ChangeEvent, useEffect } from "react";
import { useActions } from "../redux.hooks/useActions";
import { useAppSelector } from "../redux.hooks/reduxHooks";
import { initialStatePageSize } from "@/data/initialState.data";
import useSearchValue from "./useSearchValue";

/**
 * Hook usePaginate - Manages pagination in the application and is associated with the store
 * @returns 
    currentPage: number,
    pageInfo: number,
    handleChangePage: func,
    pageSize: number,
    handleChangeRowsPerPage: func,
 */

const usePaginate = () => {
  const { value} = useSearchValue();
  const { pageSize, pageInfo, startPage } = useAppSelector(
    (state) => state.paginate
  );
  const { repositoryCount } = useAppSelector((state) => state.repository);
  const { setPageSize, setPageInfo, setResetPage } = useActions();
  const [currentPage, setCurrentPage] = useState(0);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setCurrentPage(page);

    if (page === 0) {
      if (pageInfo && startPage) {
        setPageInfo({
          ...pageInfo,
          endCursor: "",
          startCursor: startPage,
        });
      }
      return;
    }

    if (currentPage < page) {
      if (pageInfo) {
        setPageInfo({
          ...pageInfo,
          startCursor: pageInfo.endCursor,
        });
      }
    } else {
      if (pageInfo) {
        if (
          repositoryCount &&
          startPage &&
          Math.floor(repositoryCount / pageSize) - page === 1
        ) {
          setPageInfo({
            ...pageInfo,
            endCursor: startPage,
          });

          return;
        }

        setPageInfo({
          ...pageInfo,
          endCursor: pageInfo.startCursor,
        });
      }
    }
  };

  const handleChangeRowsPerPage = (e: ChangeEvent<HTMLInputElement>) => {
    setPageSize(parseInt(e.target.value, initialStatePageSize));
    setCurrentPage(0);
    setResetPage();
    setPageInfo(null);
  };

  useEffect(() => {
    setCurrentPage(0);
    setResetPage();
    setPageInfo(null);
  }, [value]);

  return {
    currentPage,
    pageInfo,
    handleChangePage,
    pageSize,
    handleChangeRowsPerPage,
  };
};

export default usePaginate;
