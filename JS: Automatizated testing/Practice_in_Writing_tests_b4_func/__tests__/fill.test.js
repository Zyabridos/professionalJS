// @ts-check

import getImplementation from '../implementations/functions.js';

const fill = getImplementation();

let array;

beforeEach(() => {
  array = [1, 2, 3, 4];
});

test('common case', () => {
  fill(array, '*', 1, 3);
  expect(array).toEqual([1, '*', '*', 4]);
});

test('should use default start and end', () => {
  fill(array, '*');
  expect(array).toEqual(['*', '*', '*', '*']);
});

test('should works with start >= length', () => {
  fill(array, '*', 10, 12);
  expect(array).toEqual([1, 2, 3, 4]);
});

test('should works with start >= end', () => {
  fill(array, '*', 2, 2);
  expect(array).toEqual([1, 2, 3, 4]);
});

test('should works with end > length', () => {
  fill(array, '*', 0, 10);
  expect(array).toEqual(['*', '*', '*', '*']);
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
