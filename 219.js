// 219. Contains Duplicate II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }

  return false;
};


var containsNearbyDuplicate2 = function (nums, k) {
  let ind = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in ind && i - ind[nums[i]] <= k) {
      return true;
    }
    ind[nums[i]] = i;
  }
  return false;
};