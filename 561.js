// 561. Array Partition I

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let n = nums.length;
  let count = 0;

  let sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i += 2) {
    count += nums[i];
  }

  return count;
};


var arrayPairSum2 = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((n, index) => index % 2 == 0)
    .reduce((a, b) => a + b);
};


var arrayPairSum3 = function (nums) {
  let hash = Array(20000).fill(0);

  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < nums.length; ++i) {
    let cur = nums[i] + 10000;
    ++hash[cur];
    min = Math.min(min, cur);
    max = Math.max(max, cur);
  }
  let evenOdd = 0;
  for (let i = min; i <= max; ++i) {
    let curAmount = hash[i];
    for (let j = 0; j < curAmount; ++j) {
      if (evenOdd == 0) {
        sum += i - 10000;
      }
      evenOdd ^= 1;
    }
  }
  return sum;
};