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

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // keys().next().value returns first item's key
    }
  }
 
  get(key) {
    if (!this.cache.has(key)) return null;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return this.cache.get(key);
  }
}

/*************************************************************************************************************************/

var LRUCache = function (capacity) {
  this._capacity = capacity;
  this._count = 0;
  this._head = null;
  this._tail = null;
  this._hashTable = {};
}


LRUCache.prototype.get = function (key) {
  if (this._hashTable[key]) {
    const { value } = this._hashTable[key];
    const { prev, next } = this._hashTable[key];
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev || next.prev;
    }
    if (this._tail === this._hashTable[key]) {
      this._tail = prev || this._hashTable[key];
    }
    this._hashTable[key].prev = null;
    if (this._head !== this._hashTable[key]) {
      this._hashTable[key].next = this._head;
      this._head.prev = this._hashTable[key];
    }
    this._head = this._hashTable[key];
    return value;
  }
  return -1;
}

LRUCache.prototype.put = function (key, value) {
  if (this._hashTable[key]) {
    this._hashTable[key].value = value;
    this.get(key);
  } else {
    this._hashTable[key] = {
      key,
      value,
      prev: null,
      next: null
    };
    if (this._head) {
      this._head.prev = this._hashTable[key];
      this._hashTable[key].next = this._head;
    }
    this._head = this._hashTable[key];
    if (!this._tail) {
      this._tail = this._hashTable[key];
    }
    this._count += 1;
  }
  if (this._count > this._capacity) {
    let removedKey = this._tail.key;
    if (this._tail.prev) {
      this._tail.prev.next = null;
      this._tail = this._tail.prev;
      this._hashTable[removedKey].prev = null;
    }
    delete this._hashTable[removedKey];
    this._count -= 1;
  }
};