// 122. Best Time to Buy and Sell Stock II

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var result = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      result += prices[i] - prices[i - 1];
    }
  }

  return result;
};



var maxProfit2 = function(prices) {
    return calculate(prices, 0);
};

var calculate = function(prices, i) {
    if ( i >= prices.length ) return 0;

    let max = 0;
    for( let j = i; j < prices.length; j ++) {
        let maxprofit = 0;
        for( let t = j+1; t < prices.length; t++) {
            if ( prices[j] < prices[t] ) {
                let profit = calculate(prices, t+1) + prices[t] - prices[j];
                if ( profit > maxprofit) maxprofit = profit;
            }
        }
        if ( maxprofit > max) {
            max = maxprofit;
        }
    }

    return max;
}


var maxProfit3 = function(prices) {
    let i = 0;
    let valley = prices[0];
    let peak = prices[0];
    let result = 0;

    while(i < prices.length - 1) {
        while(i < prices.length - 1 && prices[i] >= prices[i+1])
            i++;
        valley = prices[i];
        while(i < prices.length - 1 && prices[i] <= prices[i+1])
            i++;
        peak = prices[i];
        result += peak - valley;
    }
    return result;
};