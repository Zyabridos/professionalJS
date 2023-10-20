import getFunction from '../src/functions.js';

const without = getFunction();

test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([])).toEqual([]);
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
