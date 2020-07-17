// 27. Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var count = 0;
  for(let i = 0; i < nums.length; i++) {
    if( nums[i] !== val ) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};


var removeElement = function(nums, val) {
  var i = 0;
  var n = nums.length;
  while(i < n) {
    if( nums[i] == val ) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }
  return n;
};