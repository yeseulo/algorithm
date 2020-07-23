// 268. Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);

  if (nums[0] !== 0) return 0;
  else if (nums[nums.length - 1] !== nums.length) return nums.length;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      return nums[i] + 1;
    }
  }

  return false;
};


var missingNumber2 = function(nums) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    for (let i = 0; i < nums.length+1; i++) {
        if ( !set.has(i) ) return i;
    }

    return -1;
};


var missingNumber3 = function (nums) {
  let missing = nums.length;

  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }

  return missing;
};


var missingNumber4 = function (nums) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2;
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  return expectedSum - sum;
};


var missingNumber5 = function (nums) {
  let diff = 0;

  for (let i = 0; i < nums.length; i++) {
    diff += nums[i] - i;
  }

  return nums.length - diff;
};


const missingNumber6 = (nums) =>
  nums.reduce((a, e) => a - e, (nums.length * (nums.length + 1)) / 2);