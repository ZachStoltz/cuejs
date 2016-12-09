const cuejs = function() {
  this.storage = [];

  this.size = 0;
};

cuejs.prototype.enq = function(item) {
    this.storage = [
      item,
      ...this.storage,
  ];
  this.size++;
};

cuejs.prototype.deq = function() {
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

cuejs.prototype.peek = function() {
  return this.storage[this.storage.length - 1];
}

cuejs.prototype.size = function() {
  return this.size;
}

module.exports = cuejs;
