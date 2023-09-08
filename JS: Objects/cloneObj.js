// Реализуйте и экспортируйте по умолчанию функцию,
// которая выполняет поверхностное копирование объектов.
// Реализуйте этот функционал самостоятельно, не используя функцию Object.assign().

function cloneShallow(obj) {
  const result = {};
  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    result[key] = value;
  }
  return result;
}

export default cloneShallow;

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру, как и data
console.log(data);
const data2 = cloneShallow(data);
console.log(data2);
