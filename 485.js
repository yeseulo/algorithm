// 485. Max Consecutive Ones

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0, max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    else count = 0;

    max = count > max ? count : max;
  }

  return max;
};


const findMaxConsecutiveOnes2 = (nums) => {
  let ans = 0;
  for (let i = 0, cur = 0; i < nums.length; ++i)
    ans = Math.max(ans, (cur = nums[i] == 0 ? 0 : cur + 1));
  return ans;
};


const findMaxConsecutiveOnes3 = (nums) => {
  let counter = 0;
  return nums.reduce((acc, cur) => {
    counter = cur ? counter + 1 : 0;
    return Math.max(acc, counter);
  }, 0);
};


var findMaxConsecutiveOnes4 = (nums) =>
  nums
    .map((x) => x.toString())
    .join('')
    .split('0')
    .sort()
    .reverse()[0].length;


var findMaxConsecutiveOnes5 = function (nums) {
  return nums
    .join('')
    .split('0')
    .reduce((max, ones) => Math.max(max, ones.length), 0);
};


var findMaxConsecutiveOnes6 = function (nums) {
  return Math.max(
    ...nums
      .join('')
      .split('0')
      .map((ones) => ones.length),
  );
};


var findMaxConsecutiveOnes7 = function (nums) {
  return Math.max(
    ...(nums.join('').match(/1+/g) || ['']).map((ones) => ones.length),
  );
};