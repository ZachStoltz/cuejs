# Cuejs [![npm](https://img.shields.io/npm/v/cuejs.svg?style=flat-square)](https://www.npmjs.com/package/cuejs) [![codecov](https://codecov.io/gh/ZachStoltz/cuejs/branch/master/graph/badge.svg)](https://codecov.io/gh/ZachStoltz/cuejs)

## A Base representation of a Queue in Javascript.
### Node version was tested using v7.1.0 so be aware that older versions may not work yet.


### TODOs
  1. Error Handling
  2. Stress test
  3. Investigate Node.js version restrictions

### How to run it you ask?
```Javascript
const Queue = require('queuer');
const queue = new Queue();

queue.enq(1);
queue.deq(); // returns value 1
queue.peek(); // returns next value to be dequeued
queue.size();

``` 

