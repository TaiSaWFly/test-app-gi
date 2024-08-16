import { SortByFieldType } from "@/@types/app.types";

/**
 * EditSearchValueBySortForRequest - returns the transformed query string
 * @param value string
 * @param configSort  field: string; sort?: "asc" | "desc"
 * @returns string: sort:${configSort.field}-${configSort.sort} || value
 */

export const editSearchValueBySortForRequest = (
  value: string,
  configSort: SortByFieldType
) => {
  return !!configSort.field && configSort.sort
    ? `${value} sort:${configSort.field}-${configSort.sort}`
    : value;
};
