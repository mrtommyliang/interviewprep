/**
Design and implement a data structure
for Least Recently Used(LRU) cache.It should support the following operations: get and put.

get(key) - Get the value(will always be positive) of the key
if the key exists in the cache, otherwise
return -1.
put(key, value) - Set or insert the value
if the key is not already present.When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4
*/

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.keys = new List();
  return this;
};

LRUCache.prototype.get = function (key) {
  if (!this.cache[key]) return -1;

  var node = this.cache[key];
  var result = this.cache[key].value;

  // Delete node based on reference here
  this.keys.remove(node);
  delete this.cache[key];
  this.put(key, result);

  return result;
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    this.keys.remove(this.cache[key]);
  }

  if (this.keys.size === this.capacity) {
    var tail = this.keys.tail;
    this.keys.remove(tail);

    if (this.cache[tail.key]) {
      delete this.cache[tail.key];
    }
  }
  this.keys.push(key, value);
  this.cache[key] = this.keys.head;
};

function Node(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
  return this;
}

function List() {
  this.head = null;
  this.tail = null;
  this.size = 0;
  return this;
}

List.prototype.push = function (key, value) {
  var this = this;
  const node = new Node(key, value);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  this.size++;
};

List.prototype.remove = function (node) {
  if (this.head === node) {
    this.head = this.head.next;
  } else if (this.tail === node) {
    this.tail = this.tail.prev;
  } else {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  this.size--;
};