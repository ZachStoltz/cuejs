/* eslint-disable no-undef */
const Cuejs = require('../');

describe('CueJS Test Suite', () => {
  test('A new instantiated Cue has a storage array and size property', () => {
    const queue = new Cuejs();

    expect(queue.storage).toBeInstanceOf(Array);
    expect(Number.isInteger(queue.size())).toBeTruthy();
  });

  test('Two new instantiated Cues don\'t collide with each other', () => {
    const queue1 = new Cuejs();
    queue1.enq(0);
    queue1.enq(1);
    const queue2 = new Cuejs();
    queue2.enq(2);
    queue2.enq(3);

    expect(queue1).not.toEqual(queue2);
  });

  test('function enq() increments size and adds item to cue', () => {
    const queue = new Cuejs();
    queue.enq(1);

    expect(queue.storage).toContain(1);
    expect(queue.size()).toEqual(1);

    queue.enq(2);

    expect(queue.storage).toContain(2);
    expect(queue.storage).toContain(1);
    expect(queue.storage).toEqual([2, 1]);
    expect(queue.size()).toEqual(2);
  });

  test('function deq() decrements size and returns value that was just dequeued', () => {
    const queue = new Cuejs();

    queue.enq(1);
    queue.enq(2);
    queue.enq(3);
    queue.enq(4);
    queue.enq(5);
    queue.enq(6);
    queue.enq(7);

    const size = queue.size();

    for (let i = 1; i < size; i++) {
      expect(queue.deq()).toEqual(i);
    }
  });

  test('deq when size === 1 should reset storage property and size property and still return value', () => {
    const queue = new Cuejs();

    queue.enq(1);

    expect(queue.deq()).toEqual(1);
    expect(queue.storage).toHaveLength(0);
    expect(queue.size()).toEqual(0);
  });

  test('peek should return next value in queue without removing it from said queue', () => {
    const queue = new Cuejs();

    queue.enq(1);

    expect(queue.peek()).toEqual(1);
    expect(queue.size()).toEqual(1);
  });
});
