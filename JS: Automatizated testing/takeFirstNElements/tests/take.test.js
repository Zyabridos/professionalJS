// Напишите тесты для функции take(items, n), которая возвращает первые n элементов из массива.
// По умолчанию n равен 1. Если n отрицательное число, то возвращается пустой массив.

import { strict as assert } from 'assert';
import getFunction from '../src/take.js';

const take = getFunction();

assert.deepStrictEqual(take([1, 2, 3]), [1]);
assert.deepStrictEqual(take([1, 2, 3], -1), []);
assert.deepStrictEqual(take([4, 3], 9), [4, 3]);
assert.deepStrictEqual(take([]), []);
assert.deepStrictEqual(take(['apple', 'banana', 'orange'], 2), ['apple', 'banana']);
