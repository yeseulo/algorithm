// 448. Find All Numbers Disappeared in an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let actual = Math.abs(nums[i]) - 1;

    if (nums[actual] > 0) {
      nums[actual] = -nums[actual];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};