import { useAppSelector } from "../redux.hooks/reduxHooks";
import { useActions } from "../redux.hooks/useActions";
import { useEffect } from "react";
import useSearchValue from "./useSearchValue";
import { initialStateSortByData } from "@/data/initialState.data";
import { SortByFieldType } from "@/@types/app.types";

/**
 * Hook useSortBy - Performs sorting management in the application and is associated with the store
 * @returns sortBy: SortByFieldType, setSortBy: Action Store, handleSortBy: func
 */

const useSortBy = () => {
  const { value, setValueBySort } = useSearchValue();
  const { sortBy } = useAppSelector((state) => state.sortBy);
  const { setSortBy } = useActions();
  const handleSortBy = (sort: SortByFieldType) => setSortBy(sort);

  useEffect(() => {
    setValueBySort(sortBy);
  }, [sortBy]);

  useEffect(() => {
    setSortBy(initialStateSortByData);
  }, [value]);

  return { sortBy, setSortBy, handleSortBy };
};

export default useSortBy;
