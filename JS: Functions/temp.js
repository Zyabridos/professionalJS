const users = [
  { name: 'Petr', age: 4 },
  { name: 'Igor', age: 19 },
  { name: 'Ivan', age: 4 },
  { name: 'Matvey', age: 16 },
];

// предварительно подготовим функцию-обработчик
const cb = (acc, user) => {
  if (!Object.hasOwn(acc, user.age)) {
    acc[user.age] = [];
  }
  acc[user.age].push(user.name);
  return acc; // обязательно вернуть!
};

// Начальное значение аккумулятора – пустой объект
const usersByAge = users.reduce(cb, {});

console.log(usersByAge);
