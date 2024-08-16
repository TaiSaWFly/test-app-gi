/**
 * Formatted date string as mm.dd.yyyy
 * @param date string
 * @returns string as mm.dd.yyyy
 */

export const formattedDate = (date: string) => {
  const toJsDate = new Date(date);
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedDateData = formatter.format(toJsDate).replaceAll("/", ".");

  return formattedDateData;
};
