const Queue = function() {
  this.storage = [];

  this.size = 0;
};

Queue.prototype.push = function(item) {
    this.storage = [
      item,
      ...this.storage,
  ];
  this.size++;
};

Queue.prototype.dequeue = function() {
  if (this.size === 0) return;
  let rtnValue = undefined;
  if (this.size === 1) { 
    rtnValue = this.storage[0];

    this.storage = [];
    this.size = 0;

    return rtnValue;
  } 
  --this.size;
  return this.storage.pop();
}

Queue.prototype.peek = function() {
  return this.storage[this.storage.length - 1];
}

Queue.prototype.size = function() {
  return this.size;
}

module.exports = Queue;
