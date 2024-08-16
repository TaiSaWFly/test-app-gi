import { IRepository } from "./IRepository";

/**
 * SortType - used to sort entities
 * @type
 */
export type SortType = "asc" | "desc";

/**
 * SortByFieldType - used to sort an entity by a specific field
 * @type
 */
export type SortByFieldType = { field: string; sort?: SortType };

/**
 * ErrorType - represents type internal configuration of the error in the application
 * @type
 */
export type ErrorType = { message: string; status: number };

/**
 * PageInfoResponseType - represents the response configuration type from API for paginate
 * @type
 */
export type PageInfoResponseType = {
  endCursor: string;
  startCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

/**
 * PageInfoResponseType - represents the configuration type of the API response for the application
 * @type
 */
export type RepositoryResponseType = {
  nodes: IRepository[];
  pageInfo: PageInfoResponseType;
  repositoryCount: number;
};

/**
 * RepositoryService - API request function type
 * @type
 */
export type RepositoryService = {
  getRepository: (
    searchValue: string,
    perPage: number,
    nextPage?: string,
    prevPage?: string
  ) => Promise<RepositoryResponseType | undefined>;
};
