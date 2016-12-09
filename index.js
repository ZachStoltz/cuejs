const cuejs = function cuejs() {
  this.storage = [];

  this.size = 0;
};

cuejs.prototype.enq = function enq(item) {
  this.storage = [
    item,
    ...this.storage,
  ];
  this.size = this.size + 1;
};

cuejs.prototype.deq = function deq() {
  if (this.size === 0) return undefined;
  let rtnValue
  ;
  if (this.size === 1) {
    rtnValue = this.storage[0];

    this.storage = [];
    this.size = 0;

    return rtnValue;
  }

  this.size = this.size - 1;
  return this.storage.pop();
};

cuejs.prototype.peek = function peek() {
  return this.storage[this.storage.length - 1];
};

cuejs.prototype.size = function size() {
  return this.size;
};

module.exports = cuejs;
