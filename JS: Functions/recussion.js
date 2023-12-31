// Допишите (с использованием рекурсивного процесса) функцию sequenceSum(),
// которая находит сумму последовательности целых чисел. Последовательность
// задается двумя значениями: begin - начало последовательности, end - конец последовательности.
// Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6.
// Сумма такой последовательности будет: 20.

function sequenceSum(begin, end) {
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
}

export default sequenceSum;

console.log((sequenceSum(1, 5))); // 1 + 2 + 3 + 4 + 5 = 15
console.log((sequenceSum(4, 10))); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
console.log((sequenceSum(-3, 2))); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
console.log(sequenceSum(7, 4));
