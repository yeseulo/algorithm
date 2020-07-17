// 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var min = Number.MAX_VALUE;
  var result = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    else if (prices[i] - min > result) result = prices[i] - min;
  }

  return result;
};


var maxProfit2 = function (prices) {
  var result = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > result) {
        result = prices[j] - prices[i];
      }
    }
  }

  return result;
};