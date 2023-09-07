// Реализуйте функцию takeOldest(), которая принимает на вход список пользователей и
// возвращает самых взрослых. Количество возвращаемых пользователей задается вторым параметром,
// который по умолчанию равен единице.

import _ from 'lodash';

function takeOldest(users, count = 1) {
  const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  return sorted.slice(0, count);
}

export default takeOldest;

const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

console.log(takeOldest(users));
