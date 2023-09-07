// Реализуйте и экспортируйте по умолчанию функцию,
// которая возвращает среднее арифметическое всех переданных аргументов.
// Если функции не передать ни одного аргумента, то она должна вернуть null.

import _ from 'lodash';

function average(...numbers) {
  const count = numbers.length;

  if (count === 0) {
    return null;
  }

  return _.sum(numbers) / count;
}

export default average;

// average(0); // 0
// average(0, 10); // 5
// average(-3, 4, 2, 10); // 3.25
// average(); // null

console.log(average(0)); // 0
console.log(average(0, 10)); // 5
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average(-3, -2, -2, -12));
console.log(average(18, 4, 2, 10));
console.log(average()); // null
