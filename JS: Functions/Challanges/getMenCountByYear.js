const getMenCountByYear = (users) => {
  const maleUsers = users.filter((user) => user.gender === 'male');

  const result = {};
  for (const user of maleUsers) {
    const birthYear = user.birthday.slice(0, 4);
    if (Object.hasOwn(result, birthYear)) {
      result[birthYear] += 1;
    } else {
      result[birthYear] = 1;
    }
  }

  return result;
};

export default getMenCountByYear;

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

console.log(getMenCountByYear(users));
// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };
