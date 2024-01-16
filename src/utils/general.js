/**
 * Generates a random alphanumeric string with a specified length.
 *
 * @param {number} [length=12] - The length of the generated string. Defaults to 12.
 * @returns {string} A random alphanumeric string.
 */
export const randomId = (length = 12) =>
  Math.random()
    .toString(36)
    .substring(2, length + 2);

/**
 * Calculates the sum of the elements in an array.
 *
 * @param {number[]} arr - The array of numbers to sum.
 * @throws {Error} If the input is not an array.
 * @returns {number} The sum of the elements in the array.
 */
export const sumArray = (arr) => {
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    throw new Error('Input is not an array');
  }

  // Use the reduce function to calculate the sum
  const sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);

  return sum;
};

/**
 * Calculates the different sums of the incomes/expenses.
 *
 * @param {number[]} items - The array of incomes/expenses.
 * @returns {object} The min/max/total sum of incomes/expenses.
 */
export const calculateSums = (items) => ({
  min: sumArray(items.map((x) => x.min || x.value)),
  max: sumArray(items.map((x) => x.max || x.value)),
  total: sumArray(items.map((x) => x.value)),
});
