// 520. Detect Capital

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let ascii = [];
  let n = word.length;

  for (let i = 0; i < n; i++) {
    ascii[i] =
      word[i].charAt(0) >= 'A' && word[i].charAt(0) <= 'Z' ? true : false;
  }

  let result = true;

  if (ascii.indexOf(false) === -1 || ascii.indexOf(true) === -1) {
    result = true;
  } else if (ascii[0] === false && ascii.indexOf(true) > 0) {
    result = false;
  } else if (ascii[0] === true && ascii.lastIndexOf(true) > 0) {
    result = false;
  }

  return result;
};


var detectCapitalUse2 = function (word) {
  return (
    word === word.toUpperCase() ||
    word === word[0] + word.substr(1).toLowerCase()
  );
};