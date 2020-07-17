// 88. Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;

  var length = m + n - 1;
  var pm = m - 1;
  var pn = n - 1;

  while (pn >= 0) {
    if (nums1[pm] > nums2[pn]) {
      nums1[length] = nums1[pm];
      pm--;
    } else {
      nums1[length] = nums2[pn];
      pn--;
    }

    length--;
  }

  return nums1;
};


var merge2 = function (nums1, m, nums2, n) {
  var i = m - 1;
  var j = n - 1;
  var k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }

  return nums1;
};