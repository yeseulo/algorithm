// 342. Power of Four

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if (num <= 0) return false;

  if (num % 4 === 0) {
    return isPowerOfFour(num / 4);
  } else if (num === 1) {
    return true;
  }

  return false;
};


var isPowerOfFour2 = function (num) {
  return /^1(00)*$/.test(num.toString(2));
};


var isPowerOfFour3 = function (num) {
  if (num <= 0) return false;
  const s = num.toString(2).slice(1);
  if (s.includes('1') || s.length % 2) return false;
  return true;
};


var isPowerOfFour4 = function (num) {
  if (num <= 0) return false;
  else if (num === 1) return true;

  return (num & (num - 1)) === 0 && (num % 10 === 4 || num % 10 === 6);
};


var isPowerOfFour5 = function (num) {
  return (Math.log10(num) / Math.log10(4)) % 1 === 0 ? true : false;
};


var isPowerOfFour6 = function (num) {
  var result = false;
  for (var i = 0; i < 16; i++) {
    if (Math.pow(4, i) == num) {
      result = true;
      return result;
    }
  }
  return result;
};


var isPowerOfFour7 = function (num) {
  if (num <= 0) return false;

  let i = 1;
  while (i <= num) {
    if ((num ^ i) === 0) return true;

    i *= 4;
  }
  return false;
};


var isPowerOfFour8 = function (num) {
  if (num <= 0) return false;

  while (num % 4 === 0) {
    num /= 4;
  }

  return num === 1;
};