// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число,
// которое задает размер чанка (куска).
// Функция должна вернуть массив, состоящий из чанков указанной размерности.

function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default chunk;

console.log(chunk(['a', 'b', 'c', 'd'], 2));
// [['a', 'b'], ['c', 'd']]

console.log(chunk(['a', 'b', 'c', 'd'], 3));
// [['a', 'b', 'c'], ['d']]

console.log(chunk([], 4));

console.log(chunk(['a'], 2));

console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2));
