// 35. Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var i = 0;
  for(let j = 0; j < nums.length; j++) {
    if ( nums[j] === target ) {
      return j;
    } else if (nums[j] < target) {
      i++;
    }
  }

  return i;
};


var searchInsert2 = function(nums, target) {
  if ( nums[nums.length-1] < target ) return nums.length;
  if ( nums[0] > target ) return 0;

  var i = 0;
  for(let j=0;j<nums.length;j++) {
    if ( nums[j] === target ) return j;
    else if (nums[j] < target) i++;
  }
  return i;
};


var searchInsert3 = function(nums, target) {
  if ( nums.indexOf(target) > -1 ) {
    return nums.indexOf(target);
  } else {
    if ( nums[0] > target ) return 0;
    if ( nums[nums.length-1] < target ) return nums.length;

    var i = 0;

    for(let j=0;j<nums.length;j++) {
      if ( nums[j] === target ) return j;
      else if (nums[j] < target) i++;
    }

    return i;
  }
};


var searchInsert4 = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while ( low <= high ) {
    let mid = parseInt((low + high)/2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};