// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let sentence = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let pointer = 0;

  for (let i = sentence.length - 1; i > 0; i--) {
    if (sentence[i] === sentence[pointer]) {
      pointer++;
    } else {
      return false;
    }
  }

  return true;
};


var isPalindrome2 = function (s) {
  if (s === '') return true;

  const sentence = s.replace(/[^A-Za-z0-9]/g, '');

  let front = 0;
  let back = sentence.length - 1;

  while (front < back) {
    const frontChar = sentence[front];
    const backChar = sentence[back];
    if (frontChar != backChar) {
      return false;
    }
    front++;
    back--;
  }

  return true;
};


var isPalindrome3 = function (s) {
  if (s === '') return true;
  var strippedString = s.replace(/[^A-Za-z0-9]/g, '');
  var reversedString = strippedString.split('').reverse().join('');

  return strippedString.toLowerCase() == reversedString.toLowerCase();
};


var isPalindrome4 = function (s) {
  if (s === '') return true;

  const sentence = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (let i = 0, j = sentence.length - 1; i <= j; i++, j--) {
    if (sentence.charAt(i) !== sentence.charAt(j)) return false;
  }

  return true;
};


var isPalindrome5 = function (s) {
  if (s === '') return true;

  const sentence = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i = 0,
    j = sentence.length - 1;

  while (i < j) {
    if (sentence[i++] !== sentence[j--]) return false;
  }

  return true;
};