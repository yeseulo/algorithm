// 1. Two Sum

/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length ; i++ ) {
    for(let j = i + 1; j < nums.length ; i++ ) {
      if ( nums[i] + nums[j] === target ) {
        return [j, i];
      }
    }
  }
};


var twoSum2 = function(nums, target) {
  var map = new Map();
  for(let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for(let i = 0; i < nums.length; i++) {
    if ( map.has(target-nums[i]) && map.get(target-nums[i]) !== i ) {
      return [i, map.get(target-nums[i])];
    }
  }
};


var twoSum3 = function(nums, target) {
  var map = new Map();
  for(let i = 0; i < nums.length; i++) {
    if ( map.has(target-nums[i]) ) {
      return [map.get(target-nums[i]), i];
    }
    map.set(nums[i], i);
  }
};