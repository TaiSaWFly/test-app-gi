import { ErrorType } from "@/@types/app.types";
import repositoryService from "@/services/repository.service";
import { AppDispatch } from "../createStore";
import { repositoryActions } from "../slices/repository.slice";
import { initialStatePageSize } from "@/data/initialState.data";
import { paginateActions } from "../slices/paginate.slice";
import parseError from "@/utils/parseError";

/**
 * SearchRepositoryType - Function type of request to api with recording in store
 * @type
 */
export type SearchRepositoryType = (
  searchValue: string,
  pageSize?: number,
  nextPage?: string,
  prevPage?: string
) => (dispatch: AppDispatch) => Promise<void>;

/**
 * requestSearchRepository - Function of request to api with recording in store
 * @param searchValue: string
 * @param pageSize: number
 * @param nextPage: string
 * @param prevPage: string
 * @returns Promise
 */
const requestSearchRepository: SearchRepositoryType =
  (
    searchValue,
    pageSize = initialStatePageSize,
    nextPage = "",
    prevPage = ""
  ) =>
  async (dispatch: AppDispatch) => {
    dispatch(repositoryActions.repositoryRequested());

    try {
      const data = await repositoryService.getRepository(
        searchValue,
        pageSize,
        nextPage,
        prevPage
      );
      if (data) {
        const { nodes, repositoryCount, pageInfo } = data;
        dispatch(
          repositoryActions.setRepositoryData({ nodes, repositoryCount })
        );
        dispatch(paginateActions.setPageInfo(pageInfo));
      }
    } catch (error: any) {
      const { error: Error } = error;

      const errorObj: ErrorType = {
        message: parseError(Error.response.status),
        status: Error.response.status,
      };
      dispatch(repositoryActions.setError(errorObj));
    }
  };

export default requestSearchRepository;
