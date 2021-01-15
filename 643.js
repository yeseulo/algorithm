// 643. Maximum Average Subarray I

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = [];
  sum[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }

  let res = (sum[k - 1] * 1.0) / k;
  for (let i = k; i < nums.length; i++) {
    res = Math.max(res, ((sum[i] - sum[i - k]) * 1.0) / k);
  }

  return res;
};


var findMaxAverage2 = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  res = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    res = Math.max(res, sum);
  }

  return res / k;
};