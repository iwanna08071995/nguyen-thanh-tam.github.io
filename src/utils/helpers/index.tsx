import { checkArrayNotEmptyFunc } from "@/interfaces";

/**
 * Checks whether an array is not empty.
 *
 * @param params - The array to be checked.
 * @returns True if the array is not empty, false otherwise.
 */
const checkArrayNotEmpty: checkArrayNotEmptyFunc = (params) => {
  // Check if 'params' is an array
  if (!Array.isArray(params)) {
    return false;
  }

  // Check if the array 'params' has data
  if (params.length === 0) {
    return false;
  }

  return true;
};

export { checkArrayNotEmpty };
