import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux.hooks/reduxHooks";
import requestSearchRepository from "@/store/storeActions/requestSearchRepository";
import useSearchValue from "../app.hooks/useSearchValue";
import usePaginate from "../app.hooks/usePaginate";
import { useActions } from "../redux.hooks/useActions";

/**
 * Hook useRepository - Allows you to interact with an entity "Repository" and request data in the application and is associated with the store
 * @param currentPage number
 * @returns repositoryData: IRepository[], 
    error: ErrorType,
    isLoading: boolean,
    repositoryCount: number,
    selectedRepository: IRepository,
    handleRequestRepository: func,
    setSelectedRepository: func,
 */

const useRepository = (currentPage?: number) => {
  const dispatch = useAppDispatch();
  const { value, valueBySort } = useSearchValue();
  const { pageSize, pageInfo } = usePaginate();
  const { setSelectedRepository } = useActions();

  const {
    data: repositoryData,
    error,
    isLoading,
    repositoryCount,
    selectedRepository,
  } = useAppSelector((state) => state.repository);

  const handleRequestRepository = (
    value: string,
    pageSize?: number,
    nextPage?: string,
    prevPage?: string
  ) => dispatch(requestSearchRepository(value, pageSize, nextPage, prevPage));

  useEffect(() => {
    if (!!valueBySort) {
      handleRequestRepository(valueBySort, pageSize);
    } else if (!!value) {
      handleRequestRepository(value, pageSize);
    }
  }, [valueBySort]);

  useEffect(() => {
    if (!!valueBySort) {
      handleRequestRepository(
        valueBySort,
        pageSize,
        pageInfo?.endCursor,
        pageInfo?.startCursor
      );
    } else if (!!value) {
      handleRequestRepository(
        value,
        pageSize,
        pageInfo?.endCursor,
        pageInfo?.startCursor
      );
    }
  }, [pageSize, currentPage]);

  return {
    repositoryData,
    error,
    isLoading,
    repositoryCount,
    selectedRepository,
    handleRequestRepository,
    setSelectedRepository,
  };
};

export default useRepository;
