// 189. Rotate Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let temp = 0;

  for (let i = 0; i < k % nums.length; i++) {
    temp = nums[nums.length - 1];

    for (let j = nums.length - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }

    nums[0] = temp;
  }
};


var rotate2 = function (nums, k) {
  var m = [];

  for (let i = 0; i < nums.length; i++) {
    m[(i + k) % nums.length] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = m[i];
  }
};


var rotate3 = function (nums, k) {
  k %= nums.length;

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  };
  reverse(0, nums.length - 1); // reverse
  reverse(0, k - 1); // reverse first part
  reverse(k, nums.length - 1); // reverse second part
};


var rotate4 = function (nums, k) {
  k %= nums.length;
  nums.unshift(...nums.splice(-k));
};