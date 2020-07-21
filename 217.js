// 217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort();

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }

  return false;
};


var containsDuplicate2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }

  return false;
};


var containsDuplicate3 = function (nums) {
  var set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }

  return false;
};