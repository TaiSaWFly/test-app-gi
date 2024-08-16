import {
  RepositoryService,
  RepositoryResponseType,
} from "@/@types/app.types";
import graphQLClient from "@/lib/gql.lib";
import { GET_REPOSITORY } from "./gql_tag.repository";

/**
 * @constant
 * repositoryService - entity query methods object Repository
 * 
 * getRepository
 * @param searchValue string
 * @param pageSize number
 * @param nextPage string
 * @param prevPage string
 * @returns Promise

 */

const repositoryService: RepositoryService = {
  getRepository: async (
    searchValue: string,
    pageSize: number,
    nextPage = "",
    prevPage = ""
  ) => {
    try {
      const { search } = await graphQLClient.request<{
        search: RepositoryResponseType;
      }>(GET_REPOSITORY, {
        seach: searchValue,
        pageSize,
        nextPage,
        prevPage,
      });

      return search;
    } catch (error) {
      throw { error };
    }
  },
};

export default repositoryService;
