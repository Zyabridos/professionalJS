// Реализуйте и экспортируйте функцию по умолчанию,
// которая формирует из переданного объекта другой объект,
// включающий только указанные свойства. Параметры:

//    Исходный объект
//    Массив имен свойств

function pick(obj, userArray) {
  const result = {};
  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    for (let i = 0; i <= userArray.length; i += 1) {
      if (userArray[i] === key) {
        result[key] = value;
      }
    }
  }
  return result;
}

export default pick;

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

console.log(pick(data, ['user'])); // { user: 'ubuntu' }
console.log(pick(data, ['os', 'user'])); // { os: 'linux', user: 'ubuntu' }
console.log(pick(data, [])); // {}
// // Если такого свойства нет в исходных данных, то оно игнорируется
console.log(pick(data, ['none', 'cores'])); // { cores: 4 }
