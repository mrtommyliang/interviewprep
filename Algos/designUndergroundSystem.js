/*
Implement the class UndergroundSystem that supports three methods:

1. checkIn(int id, string stationName, int t)

A customer with id card equal to id, gets in the station stationName at time t.
A customer can only be checked into one place at a time.
2. checkOut(int id, string stationName, int t)

A customer with id card equal to id, gets out from the station stationName at time t.
3. getAverageTime(string startStation, string endStation)

Returns the average time to travel between the startStation and the endStation.
The average time is computed from all the previous traveling from startStation to endStation that happened directly.
Call to getAverageTime is always valid.
You can assume all calls to checkIn and checkOut methods are consistent. That is, if a customer gets in at time t1 at some station, then it gets out at time t2 with t2 > t1. All events happen in chronological order.
*/

class UndergroundSystem {
  constructor() {
    this.checkIns = {}
    this.trips = {}
  }

  checkIns(id, stationName, t) {
    this.checkIns[id] = {
      t: t,
      stationName: stationName
    }
  }

  checkOut(id, stationName, t) {
    let route = this.checkIns[id].stationName + '=>' + stationName
    if(!(route in this.trips)) {
      this.trips[route] = []
    }
    this.trips[route].push(t-this.checkIns[id].t)
  }

  getAverageTime(startStation, endStation) {
    let route = startStation + '=>' + endStation
    let sum = 0 
    for (let i = 0; i < this.trips[route].length; i++) {
      sum += this.trips[route][i]
    }
    return (sum/this.trips[route].length)
  }
}

