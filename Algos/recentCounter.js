/*
Write a class RecentCounter to count recent requests.

It has only one method: ping(int t), where t represents some time in milliseconds.

Return the number of pings that have been made from 3000 milliseconds ago until now.

Any ping with time in [t - 3000, t] will count, including the current ping.

It is guaranteed that every call to ping uses a strictly larger value of t than before. 

Input: 
  inputs = ["RecentCounter","ping","ping","ping","ping"], 
  inputs = [[],[1],[100],[3001],[3002]]
Output: [null,1,2,3,3]

*/

var RecentCounter = function() {
  this.stream = []
};


RecentCounter.prototype.ping = function (t) {
  // Everytime we recieve a ping, add the time to the stream of integers
  this.stream.push(t) 
  // To exclude the times that are not included within the range of t - 3000, we remove the first element from the stream while it is less than the calculated range 
  while(this.stream[0] < t - 3000) {
    this.stream.shift()
  }
  // When the loop ends the length of calls will be the length of the array
  return this.stream.length
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */