// Реализуйте и экспортируйте по умолчанию функцию, которая принимает двумерный массив (матрицу)
// и возвращает новый массив, основанный на переданном и измененный таким образом,
// что правая половина матрицы становится зеркальной копией левой половины,
// симметричной относительно вертикальной оси матрицы. Для простоты условимся, что матрица
// всегда имеет чётное количество столбцов и количество столбцов всегда равно количеству строк.

function getMirrorMatrix(array) {
  const result = [];
  for (let i = 0; i < array.length / 2; i += 1) {
    for (let j = 1; j < array.length / 2; j += 1) {
      result.push(array[0][0]);
      result.push(array[0][1]);
    }
  }
  return result;
}

const arrayTest1 = [
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
];

console.log(arrayTest1[2][0]);
console.log(arrayTest1[2][3]);
console.log(getMirrorMatrix(arrayTest1));

// [0][0] - > [0][3]
// [0][1] - > [0][2]
// [1][0] - > [1][3]
// [1][1] - > [1][2]
// [2][0] - > [2][3]
// [2][1] - > [2][4]
