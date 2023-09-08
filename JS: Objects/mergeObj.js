// Реализуйте и экспортируйте по умолчанию функцию, которая заполняет
// объект данными из другого объекта по разрешенному списку ключей. Параметры:

// Исходный объект
// Список ключей которые нужно заменить
// Данные, которые нужно сливать в исходный объект

// В случае, когда список ключей пустой, нужно сливать все данные полностью.

// 1. берем ключ и сравниваем, есть ли он в первом объекте
// 2. если ключ находится, то при помощи pick заменяем только его
// 3. если ключ не находится, то заменяем все при помощи Object.assign;

import _ from 'lodash';

function fill(obj1, keys, obj2) {
  let result = {};
  if (keys.length === 0) {
    result = Object.assign(obj1, obj2);
  }
  result = Object.assign(obj1, _.pick(obj2, keys));
  return result;
}

export default fill;

// const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
// Object.assign(object, filteredData);

const company = {
  name: null,
  state: 'moderating',
  phone: '123987',
};

const data = {
  name: 'Hexlet',
  state: 'published',
  phone: '987123',
};

console.log(fill(company, ['name', 'phone'], data));
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   phone: '987123'
// }

console.log(fill(company, [], data));
// {
//   name: 'Hexlet',
//   state: 'published',
//   phone: '987123'
// }
