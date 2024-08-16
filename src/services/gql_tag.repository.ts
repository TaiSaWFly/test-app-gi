import { gql_tag } from "@/lib/gql.lib";

/**
 * GET_REPOSITORY - text function query GraphQL for entity Repository
 * @constant
 */

export const GET_REPOSITORY = gql_tag`
  query getRepo($seach: String!, $pageSize: Int!, $nextPage: String, $prevPage: String) {
  search(
    query: $seach
    type: REPOSITORY
    first: $pageSize
    after: $nextPage
    before: $prevPage
  ) {
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    repositoryCount
    nodes {
      ... on Repository {
        id
        name
        licenseInfo {
          id
          name
        }
        stargazerCount
        forkCount
        description
        updatedAt
        createdAt
        languages(first: 10) {
          totalSize
          edges {
            size
            node {
              name
              id
            }
          }
        }
      }
    }
  }
}`;
