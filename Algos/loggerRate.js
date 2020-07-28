/*
Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.

Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.

It is possible that several messages arrive roughly at the same time.

Example:

Logger logger = new Logger();

// logging string "foo" at timestamp 1
logger.shouldPrintMessage(1, "foo"); returns true;

// logging string "bar" at timestamp 2
logger.shouldPrintMessage(2,"bar"); returns true;

// logging string "foo" at timestamp 3
logger.shouldPrintMessage(3,"foo"); returns false;

// logging string "bar" at timestamp 8
logger.shouldPrintMessage(8,"bar"); returns false;

// logging string "foo" at timestamp 10
logger.shouldPrintMessage(10,"foo"); returns false;

// logging string "foo" at timestamp 11
logger.shouldPrintMessage(11,"foo"); returns true;
*/

var Logger = function () {
  this.table = {}
  this.timeLimit = 10
}

Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if(!this.table[message]) {
    this.table[message] = timestamp
    return true
  }

  if (this.table[message] && timestamp - this.table[message] >= this.timeLimit) {
    this.table[message] = timestamp
  }
  return false
}

/******************************************/

class Logger {
  constructor(timestamp, message) {
    this.timestamp = timestamp
    this.message = message
    this.table = {}
  }
  shouldPrintMessage(timestamp, message) {
    if (!(message in this.table) || timestamp - this.table[message] >= 10) {
      this.table[message] = timestamp
      return true
    } else return false
  }
}