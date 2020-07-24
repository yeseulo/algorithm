// 283. Move Zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }

  return nums;
};


var moveZeroes2 = function(nums) {
    let numZeroes = 0;

    for(let i = 0; i < nums.length; i++) {
        numZeroes += (nums[i] == 0);
    }

    let answer = [];
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            answer.push(nums[i]);
        }
    }

    while(numZeroes--) {
        answer.push(0);
    }

    for(let i = 0; i < nums.length; i++) {
        nums[i] = answer[i];
    }

    return nums;
};


var moveZeroes3 = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
  }

  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};