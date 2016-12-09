const cuejs = function cuejs() {
  this.storage = [];

  this.quantity = 0;
};

cuejs.prototype.enq = function enq(item) {
  this.storage = [
    item,
    ...this.storage,
  ];
  this.quantity = this.quantity + 1;
};

cuejs.prototype.deq = function deq() {
  if (this.quantity === 0) return undefined;
  let rtnValue
  ;
  if (this.quantity === 1) {
    rtnValue = this.storage[0];

    this.storage = [];
    this.quantity = 0;

    return rtnValue;
  }

  this.quantity = this.quantity - 1;
  return this.storage.pop();
};

cuejs.prototype.peek = function peek() {
  return this.storage[this.storage.length - 1];
};

cuejs.prototype.size = function size() {
  return this.quantity;
};

module.exports = cuejs;
