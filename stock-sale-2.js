/*
DESCRIPTION:
Say you have an array for which each element is the price
of a given stock and the index represents the day.
If you were only permitted to complete at most one
transaction(i.e., buy one and sell one share of the 
stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one. 

Examples:

[7,1,5,3,6,4] -> 5
Explanation: 
Buy on day 2 (price 1) and sell on day 5 (price 6), Profit = 6-1 = 5. 
Not 7-1 6, as selling price needs to be larger than the buying price.

[7,6,4,3,1] -> 0
Explanation: 
In this case, no transaction is done, i.e. max profit O.
*/

let test1 = [7, 1, 5, 3, 6, 4];
let test2 = [7, 6, 4, 3, 1];
let test3 = [8, 7, 1, 3, 5]; // 4 // 4
let test4 = [9, 7, 5, 3, 1, 0]; // 0 // 0
let test5 = [21, 14, 7, 10, 5, 7, 10, 1, 2, 3]; // 5 // 10
let test6 = [
  14,
  84,
  21,
  72,
  20,
  54,
  85,
  68,
  37,
  52,
  10,
  58,
  22,
  4,
  45,
  90,
  77,
  70,
  94,
  9,
  40,
  69,
  36,
  88,
  27,
  16,
  75,
  79,
  63,
  12,
  44,
  67,
  24,
  28,
  80,
  65,
  55,
  15,
  47,
  35,
  53,
  82,
  39,
  7,
  83,
  29,
  2,
  73,
  42,
  97,
  49,
  87,
  86,
  31,
  34,
  51,
  98,
  76,
  96,
  89,
  3,
  92,
  25,
  33,
  93,
  23,
  81,
  91,
  41,
  19,
  95,
  1,
  8,
  57,
  99,
  66,
  64,
  62,
  50,
  30,
  74,
  17,
  5,
  18,
  100,
  43,
  6,
  11,
  26,
  32,
  46,
  38,
  59,
  60,
  71,
  61,
  56,
  78,
  48,
  13,
]; // 99 // 1684

function stockSaleMultiple(arr) {
  if (arr.length == 0) {
    console.log(0);
    return 0;
  }
  // var start = arr[0];
  var tradeState = 0;
  var maxDiff = 0;
  var declineOnly = true;
  for (i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i], arr[i + 1], arr[i] < arr[i + 1]);
    if (arr[i] < arr[i + 1]) {
      declineOnly = false;
    }
    for (q = i; q < arr.length; q++) {
      let curr = arr[i];
      // console.log(curr, arr[q], maxDiff);
      if (arr[q] - curr > maxDiff) {
        maxDiff = arr[q] - curr;
      }
    }
  }
  if (declineOnly === true) {
    console.log(0);
    return 0;
  } else {
    console.log(maxDiff);
    return maxDiff;
  }
}

stockSale(test1);
stockSale(test2);
stockSale(test3);
stockSale(test4);
stockSale(test5);
stockSale(test6);


