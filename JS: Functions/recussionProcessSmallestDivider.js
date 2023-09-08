// Реализуйте тело функции smallestDivisor(), используя итеративный процесс.
// Функция должна находить наименьший делитель заданного числа.
// Число, передаваемое в функцию, больше нуля.

// Доп. условие: делитель должен быть больше единицы, за исключением случая,
// когда аргументом является единица (наименьшим делителем которой является также единица).

// Например, наименьший делитель числа 15 это 3.

function smallestDivisor(n) {
  if (n === 1) {
    return 1;
  }
  function iter(counter) {
    if (n % counter === 0) {
      return counter;
    }
    return iter(counter + 1);
  }

  return (iter(2));
}

export default smallestDivisor;

console.log(smallestDivisor(16)); // 2
console.log(smallestDivisor(144)); // 2
console.log(smallestDivisor(15)); // 3
console.log(smallestDivisor(17)); // 17
