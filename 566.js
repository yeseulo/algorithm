// 566. Reshape the Matrix

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (nums.length == 0 || nums.length * nums[0].length !== r * c) return nums;

  var map = new Map();

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      map.set(nums[i].length * i + j, nums[i][j]);
    }
  }

  var result = [];

  for (let i = 0; i < r; i++) {
    result[i] = [];

    for (let j = 0; j < c; j++) {
      result[i][j] = map.get(c * i + j);
    }
  }

  return result;
};


var matrixReshape2 = function (nums, r, c) {
  if (nums.length == 0 || nums.length * nums[0].length !== r * c) return nums;

  let result = Array.from(Array(r), () => new Array(c));

  let rows = 0,
    cols = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      result[rows][cols] = nums[i][j];
      cols++;
      if (cols === c) {
        rows++;
        cols = 0;
      }
    }
  }

  return result;
};


var matrixReshape3 = function (nums, r, c) {
  if (nums.length == 0 || nums.length * nums[0].length !== r * c) return nums;

  let result = Array.from(Array(r), () => new Array(c));
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      result[Math.floor(count / c)][Math.floor(count % c)] = nums[i][j];
      count++;
    }
  }

  return result;
};



/**
 * @param {number[][]} nums
 * @param {number} h
 * @param {number} w
 * @return {number[][]}
 */
var matrixReshape4 = function (nums, h, w) {
  const m = nums.length,
        n = nums[0].length;
  if (m * n !== h * w) return nums;
  const res = [];
  for (let i = 0, r = 0; r < m; r++) {
    for (let c = 0; c < n; c++, i++) {
      if (!res[Math.floor(i / w)]) res.push([]);
      res[Math.floor(i / w)].push(nums[r][c]);
    }
  }
  return res;
};


var matrixReshape5 = function (nums, h, w) {
  const m = nums.length,
        n = nums[0].length;
  if (m * n !== h * w) return nums;
  const res = [];
  for (let i = 0; i < m * n; i++) {
    let r = Math.floor(i / w);
    if (!res[r]) res.push([]);
    res[r].push(nums[Math.floor(i / n)][i % n]);
  }
  return res;
};


var matrixReshape6 = function (nums, h, w) {
  const all = nums.reduce((all, row) => [...all, ...row], []);
  return all.length === h * w
    ? new Array(h).fill(0).map((row, r) => all.slice(r * w, r * w + w))
    : nums;
};