/**
 There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

1 <= costs.length <= 100
It is guaranteed that costs.length is even.
1 <= costs[i][0], costs[i][1] <= 1000
*/

/*
PROGRAM START takes in an input of costs which is a nested array
  INSTANTIATE n to be the half of the length of costs  
  INSTANTIATE sum to be 0

  SORT by "the cost to city A" minus "the cost to city B"

  ITEREATE through HALF the sorted
    SUM first half of the array with index values at 0 + SUM second half of the array with index values at 1
  END ITEREATE

PROGRAM END
*/

const twoCitySchedCost = (costs) => {
  let n = costs.length / 2;
  let sum = 0;
  costs.sort((a, b) => {
    return (a[0] - b[0]) - (a[1] - b[1]);
  });

  for (let i = 0; i < n; ++i) {
    sum += costs[i][0] + costs[i + n][1];
  }

  return sum;
}


twoCitySchedCost([10, 20], [30, 200], [400, 50], [30, 20])