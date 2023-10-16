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

function isWindowSize1024(): boolean {
  // Get the current window width
  const windowWidth: number = window.innerWidth;

  // Check if the window width is less than 1024px
  return windowWidth < 1024;
}
export { checkArrayNotEmpty, isWindowSize1024 };
