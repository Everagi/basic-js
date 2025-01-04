const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let matrixsum = 0;

  matrix.map((row, rowIndex) => {
    row.map((digit, digitIndex) => {
      if (
        !matrix[rowIndex - 1] ||
        (matrix[rowIndex - 1] && matrix[rowIndex - 1][digitIndex] > 0)
      ) {
        matrixsum += digit;
      }
    });
  });

  return matrixsum;
}

module.exports = {
  getMatrixElementsSum
};
