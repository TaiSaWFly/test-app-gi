/**
 * parseError - returns error message by status
 * @param status number
 * @returns string: error message
 */

const parseError = (status: number) => {
  switch (status) {
    case 401:
      return "Unauthorized";

    default:
      return "Some Error";
  }
};

export default parseError;
