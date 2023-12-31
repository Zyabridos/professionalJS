// Реализуйте и экспортируйте по умолчанию функцию,
// которая проверяет переданное число на простоту и печатает на экран yes или no.

// Подсказки
// Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.

// Для этого выделите процесс определения того,
// является ли число простым, в отдельную функцию,
// возвращающую логическое значение. Это функция, с помощью которой мы отделяем чистый код от кода,
// интерпретирующего логическое значение (как 'yes' или 'no') и
// делающего побочный эффект (печать на экран).

function isPrime(n) {
  if (Number.isNaN(n) || !Number.isFinite(n) || n % 1 || n < 2) return false;
  if (n % 2 === 0) return (n === 2);
  if (n % 3 === 0) return (n === 3);
  const m = Math.sqrt(n);
  for (let i = 5; i <= m; i += 6) {
    if (n % i === 0) return false;
    if (n % (i + 2) === 0) return false;
  }
  return true;
}

function sayPrimeOrNot(n) {
  const text = isPrime(n) ? 'yes' : 'no';
  console.log(text);
}

sayPrimeOrNot(4); // 'no'
