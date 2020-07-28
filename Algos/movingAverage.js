/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Example:

MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
*/

/*
  instantiate a length for the MovingAverage class
  .next() takes a number (val)



PROGRAM START class constructor 
  INSTANTIATE constructor to take in size input
    this.size = size
    this.queue = empty array
    this.sum = 0
  END constructor

  NEXT METHOD (value)
    IF (queue is greater than size) 
      remove the first value in queue
    END IF
    IF (queue is less than or equal to size) 
      PUSH value
      ADD val to sum
      DIVIDE sum by length of queue
    END IF


PROGRAM END
*/

class MovingAverage {
  constructor (size) {
    this.size = size
    this.queue = []
    this.sum = 0
  }

  next(val){
    this.queue.push(val)
    this.sum += val

    if(this.size < this.queue.length) {
      this.sum -= this.queue.shift()
    }
    return this.sum / this.queue.length
  }
}

let obj = new MovingAverage(3)
obj.next(1) // = 1
obj.next(10) // = (1 + 10) / 2
obj.next(3) // = (1 + 10 + 3) / 3
obj.next(5) // = (10 + 3 + 5) / 3

