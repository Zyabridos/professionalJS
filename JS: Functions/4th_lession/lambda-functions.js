// Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов
// строки в обратном порядке. Количество символов передаётся в takeLast() вторым параметром.
// Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.

function run(text) {
  function takeLast(str, length) {
    if (str.length === 0 || str.length < length) {
      return null;
    }

    const result = [];
    for (let i = str.length - 1; result.length < length; i -= 1) {
      result.push(str[i]);
    }

    return result.join('');
  }
  return takeLast(text, 4);
}

export default run;

console.log(run('')); // null
console.log(run('cb')); // null
console.log(run('power')); // rewo
console.log(run('hexlet')); // telx

// function sum(a, b) {
//   // определили "внутреннюю" анонимную функцию и
//   // сохранили в константе innerSum
//   const innerSum = (x, y) => x + y;

//   // вызвали внутреннюю функцию и
//   // вернули результат вызова наружу из sum
//   return innerSum(a, b);
// };

// console.log(sum(1, 4)); // 5
