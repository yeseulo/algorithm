// 532. K-diff Pairs in an Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (nums.length == 0 || k < 0) return 0;

  let map = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }

  map.forEach((value, key) => {
    if (k === 0) {
      if (value > 1) count++;
    } else {
      if (map.has(key + k)) count++;
    }
  });

  return count;
};


const findPairs2 = (nums, k) => {
  if (k < 0) return 0;

  const map = {};
  const uniqueNums = new Set();
  const repeatedNums = new Set();
  let count = 0;

  for (const num of nums) {
    map[num] = ~~map[num] + 1;
    uniqueNums.add(num);
    if (map[num] >= 2) repeatedNums.add(num);
  }

  if (k === 0) return repeatedNums.size;

  for (const num of uniqueNums) {
    if (map[num + k] !== undefined) count++;
    if (map[num - k] !== undefined) count++;
  }

  return count / 2;
};


var findPairs3 = function (nums, k) {
  if (k < 0) return 0;
  const map = nums.reduce(
    (m, num) => m.set(num, m.get(num) + 1 || 1),
    new Map(),
  );
  const getPairs = (res, key) => {
    const target = Number(key) + k;
    if (!k) {
      res = map.get(key) > 1 ? res + 1 : res;
    } else {
      if (map.get(target)) res++;
    }
    return res;
  };
  return [...map.keys()].reduce(getPairs, 0);
};