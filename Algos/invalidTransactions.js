/*
A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.



Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
Example 2:

Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]
Example 3:

Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]


Constraints:

transactions.length <= 1000
Each transactions[i] takes the form "{name},{time},{amount},{city}"
Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
Each {time} consist of digits, and represent an integer between 0 and 1000.
Each {amount} consist of digits, and represent an integer between 0 and 2000.
*/

// (name, time, amount, city)

const invalidTransactions = (transactions) => {
  // instantiate an empty set for values to be added
  let invalid = new Set() 
  // instantiate an empty hash table for values to be added
  let map = new Map() // {name: }
  // instantiate a tran variable to iterate through transactions input
  for (const tran of transactions) {
    // instantiate name, time, amount and city variables to be assigned to the split values of tran
    let [name, time, amount, city] = tran.split(',')
    // if map doesn't have a name key
    if (!map.has(name)) {
      // set the name key in map, and give it an empty array
      map.set(name, [])
    }
    // get name input and push the time, amnount, and city values into the empty array of the name
    map.get(name).push([time, amount, city])
  }
  // iterate through the map's keys 
  for (let name of map.keys()) {
    // assign entries to have the values of name
    let entries = map.get(name)
    // iterate through the values again to build an invalid string of first input
    for (let i = 0; i < entries.length; i++) {
      let [time, amount, city] = entries[i]
      let entry = `${name},${time},${amount},${city}`
      if (amount > 1000) {
        invalid.add(entry)
      }
          // iterate through the values again to build an invalid string of second input
      for (let j = i + 1; j < entries.length; j++) {
        let [time2, amount2, city2] = entries[j]
        let entry2 = `${name},${time2},${amount2},${city2}`
        if (Math.abs(time2 - time) <= 60 && city !== city2) {
          invalid.add(entry)
          invalid.add(entry2)
        }
      }
    }
  }

  return [...invalid]
};

let transactions = ["alice, 20, 800, mtv", "alice, 50, 1200, mtv"]
invalidTransactions(transactions)