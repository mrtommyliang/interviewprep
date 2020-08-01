/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/*
PROGRAM START input of array
  instantiate to be the first value of prices array input 
  instantiate profit to be zero

  ITERATE through prices starting at index 1 since we're already using index 0 as the starting comparison in prices
    REASSIGN min to be the minimum value, comparing it against the first value and all the other values within prices
    REASSIGN profit to be the maximum value through the difference of prices - min, and the profit
  END ITERATE

  RETURN profit

PROGRAM END
*/


const maxProfit = (prices) => {
  let min = prices[0]
  let profit = 0

  for(let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    profit = Math.max(prices[i] - min, profit)
  }
  return profit
} 

maxProfit([7,1,5,3,6,4])