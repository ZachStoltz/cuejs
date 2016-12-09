# Queuer
## A Base representation of a Queue in Javascript.


### TODOs
  1. Error Handling
  2. Stress test
  3. Investigate Node.js version restrictions

### How to run it you ask?
```
const Queue = require('queuer');
const queue = new Queue();

queue.push(1);
queue.dequeue(); // returns value 1
queue.peek(); // returns next value to be dequeued

``` 

