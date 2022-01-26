/**
 * Check if array is empty or not.
 *
 * @param {Array} array
 */
export const isEmpty = (array: any) => {
  return !Array.isArray(array) || !array.length;
};
