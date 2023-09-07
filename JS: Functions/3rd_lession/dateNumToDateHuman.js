// Реализуйте функцию, которая конвертирует даты в массив человеко-читаемых строк
// на английском языке. Каждая из дат представлена массивом [2001, 10, 18],
// в котором первый элемент — это год, второй — месяц, и третий — число. Функция на вход должна принимать любое количество параметров.
// Если в функцию ничего не было передано, она должна вернуть пустой массив. Экспортируйте функцию по умолчанию.

function convert(...dates) {
  const array = [];
  for (const date of dates) {
    const formatedDate = new Date(...date);
    // const dateString = `${date[0]}, ${date[1]}, ${date[2]}`; - человеческие даты, начинающиеся с 1
    array.push(formatedDate.toDateString());
  }
  return array;
}

export default convert;

console.log(convert());
// []
 
console.log(convert([1993, 3, 24]));
// ['Wed Mar 24 1993']
 
console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));
// ['Wed Mar 24 1993', 'Tue Aug 12 1997', 'Thu Oct 18 2001']
