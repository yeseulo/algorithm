// 26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var count = 0;

  for(let i = 1; i < nums.length; i++) {
    if ( nums[i] !== nums[count] ) {
      count++;
      nums[count] = nums[i];
    }
  }

  return count + 1;
};


var removeDuplicates2 = function (nums) {
  if (nums.length === 0) return 0;

  var count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[count]) {
      count++;
      nums[count] = nums[i];
    }
  }

  return count + 1;
};