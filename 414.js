// 414. Third Maximum Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums.sort((a, b) => b - a);

  if (nums.length < 3) return nums[0];

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 2) return nums[i];
    if (nums[i] !== nums[i + 1]) count++;
  }

  if (count < 3) return nums[0];
};


var thirdMax2 = function (nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
    if (nums[i] > first) {
      [first, second, third] = [nums[i], first, second];
    } else if (nums[i] > second) {
      [second, third] = [nums[i], second];
    } else if (nums[i] > third) {
      third = nums[i];
    }
  }
  return third === -Infinity ? first : third;
};


var thirdMax3 = function (nums) {
  if (nums.length < 3) return Math.max(...nums);

  let set = new Set(nums);
  if (set.size < 3) return Math.max(...set);

  for (let i = 0; i < 2; i++) {
    set.delete(Math.max(...set));
  }

  return Math.max(...set);
};