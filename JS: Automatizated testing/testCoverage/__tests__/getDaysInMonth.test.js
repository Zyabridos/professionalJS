import getDaysInMonth from '../implementation/getDaysInMonth.js';

const get = getImpelementation();

test('testing function getDaysInMonth()', () => {
  expect(get(4, 2023)).toBe(30);
  expect(get(384, 2021)).toBeNull();
  expect(get(2, 2024)).toBe(29);
  expect(get(1, 2000)).toBe(31);
  expect(get(2, 2023)).toBe(28);
});

// npx jest --coverage
