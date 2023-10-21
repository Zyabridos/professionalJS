// Напишите тесты для функции gt(value, other), которая возвращает true в том случае,
// если value > other, и false в иных случаях.

import getFunction from '../src/functions.js';

const gt = getFunction();

test('gt', () => {
  expect(gt(3, 1)).toBe(true);
  expect(gt(1, 3)).toBe(false);
  expect(gt(3, 3)).toBe(false);
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
