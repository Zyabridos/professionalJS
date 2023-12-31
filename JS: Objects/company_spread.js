// Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании
// и возвращает его. Для создания компании обязательно только одно свойство – имя компании.
// Остальные свойства добавляются только если они есть. Параметры:

// Имя (обязательно)
// Объект с дополнительными свойствами (если они есть)
// Также, кроме имени, у компаний есть два свойства со значениями по умолчанию.
// Если значение этих свойств не передано при создании, то они принимают следующие значения:

// state – moderating
// createdAt – текущая дата (в формате Unix-времени.
// Это число - количество миллисекунд, прошедших с полуночи 1 января 1970 года)

function make(name, data = {}) {
  const defaultData = {
    state: 'moderating',
    createdAt: Date.now(),
  };

  return { name, ...defaultData, ...data };
}

// Дополнительные свойства не переданы
const company = make('Hexlet');
console.log(company);
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

// Передаем дополнительные свойства
const companyWithWebSite = make('Hexlet', { website: 'hexlet.io', state: 'published' });
console.log(companyWithWebSite);
// {
//   name: 'Hexlet',
//   state: 'published',
//   createdAt: <тут текущая дата>
//   website: 'hexlet.io',
// }
