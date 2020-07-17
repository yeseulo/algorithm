// 53. Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums === null || nums.length === 0) return 0;
  var max = nums[0];
  var sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (sum < 0) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }

    max = Math.max(max, sum);
  }
  return max;
};


var maxSubArray2 = function (nums) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};