import { appConfig } from "@/config/app.config";
import { GraphQLClient, gql as gql_tag } from "graphql-request";

/**
 * headers - default request header configuration
 * @constant
 */
const headers = {
  headers: {
    Authorization: `Bearer ${appConfig.TOKEN}`,
    "Content-Type": "application/json",
  },
};

/**
 * graphQLClient - class object GraphQLClient for queries
 * @function
 */
const graphQLClient = new GraphQLClient(appConfig.API_ENDPOINT, headers);

export { gql_tag };
export default graphQLClient;
