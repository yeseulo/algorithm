// 119. Pascal's Triangle II

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var result = [];
  for (let i = 0; i <= rowIndex; i++) {
    result[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || i === j) {
        result[i][j] = 1;
      } else {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
  }

  return result[rowIndex];
};


var getRow2 = function (rowIndex) {
  var result = [1];

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = result.length - 1; j > 0; j--) {
      result[j] = result[j - 1] + result[j];
    }
    result.push(1);
  }

  return result;
};


// class Solution {
// public:
//     vector<int> getRow(int rowIndex) {
//         vector<int> A(rowIndex+1, 0);
//         A[0] = 1;
//         for(int i=1; i<rowIndex+1; i++)
//             for(int j=i; j>=1; j--)
//                 A[j] += A[j-1];
//         return A;
//     }
// };