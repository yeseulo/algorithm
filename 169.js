// 169. Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let item of map) {
    if (item[1] > nums.length / 2) return item[0];
  }
};


// Brute Force
var majorityElement2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === nums[i]) count++;
    }

    if (count > nums.length / 2) return nums[i];
  }

  return -1;
};


// Sorting
var majorityElement3 = function (nums) {
  nums.sort();
  return nums[parseInt(nums.length / 2)];
};


// Randomization
var majorityElement3 = function (nums) {
  let majorityCount = parseInt(nums.length / 2);

  while (true) {
    let candidate = nums[randRagne(0, nums.length)];
    if (countOccurences(nums, candidate) > majorityCount) return candidate;
  }
};

var randRagne = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var countOccurences = function (nums, num) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num) {
      count++;
    }
  }
  return count;
};


// Boyer-Moore Voting Algorithm
var majorityElement5 = function (nums) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) candidate = nums[i];
    count += nums[i] === candidate ? 1 : -1;
  }

  return candidate;
};