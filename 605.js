// 605. Can Place Flowers

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let counter = 0;

    if ( flowerbed.length === 1 && flowerbed[0] === 0 && n === 1 ) return true;

    for(let i = 0; i < flowerbed.length; i++) {
        if (
          flowerbed[i] === 0 &&
          flowerbed[i+1] === 0 &&
          (i === 0 || flowerbed[i-1] === 0 || i === flowerbed.length-2)
        ) {
          flowerbed[i] = 1;
          counter++;
        }
    }

    return counter >= n;
};


var canPlaceFlowers2 = function(flowerbed, n) {
    let i = 0, count = 0;
    while(i < flowerbed.length) {
        if ( flowerbed[i] === 0 && ( i == 0 || flowerbed[i-1] == 0 ) && ( i == flowerbed.length -1 || flowerbed[i+1] == 0)) {
            flowerbed[i] = 1;
            count++;
        }
        i++;
    }
    return count >= n;
};


var canPlaceFlowers3 = function (flowerbed, n) {
  let i = 0, count = 0;

  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 &&
      (i == 0 || flowerbed[i - 1] == 0) &&
      (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)
    ) {
      flowerbed[i++] = 1;
      count++;
    }

    if (count >= n) {
      return true;
    }
    i++;
  }
  return false;
};


var canPlaceFlowers4 = function (flowerbed, n) {
  let current = 0;

  for (var i = 0; i <= flowerbed.length; i++) {
    if (i < flowerbed.length && flowerbed[i] == 0) {
      current++;
      if (i == 0) current++;
      if (i == flowerbed.length - 1) current++;
    } else {
      n -= Math.trunc((current - 1) / 2);
      if (n <= 0) return true;
      current = 0;
    }
  }
  return false;
};


var canPlaceFlowers5 = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      n--;
      i++;
    }
  }
  return n === 0;
};