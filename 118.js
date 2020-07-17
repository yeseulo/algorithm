// 118. Pascal's Triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var result = [];

  for (let i = 0; i < numRows; i++) {
    result[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || i === j) {
        result[i][j] = 1;
      } else {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
  }

  return result;
};


var generate2 = function (numRows) {
  var result = [];

  for (let i = 0; i < numRows; i++) {
    result[i] = [];
    result[i][0] = 1;

    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }

    result[i][i] = 1;
  }

  return result;
};


var generate3 = function (numRows) {
  if (!numRows || numRows <= 0) return [];

  const pascal = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRow = pascal[pascal.length - 1];
    const shiftLeft = [...prevRow, 0];
    const shiftRight = [0, ...prevRow];

    const currentRow = shiftLeft.map((r, i) => r + shiftRight[i]);
    pascal.push(currentRow);
  }

  return pascal;
}