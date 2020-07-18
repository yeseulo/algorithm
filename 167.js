// 167. Two Sum II - Input array is sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i]))
      return [map.get(target - numbers[i]) + 1, i + 1];

    map.set(numbers[i], i);
  }
};


// two-pointer
var twoSum2 = function (numbers, target) {
  let i = 0,
      j = numbers.length - 1;

  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    } else {
      j--;
    }
  }
};