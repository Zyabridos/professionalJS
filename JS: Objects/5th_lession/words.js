// Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении,
// и возвращает объект. В объекте свойства — это слова (приведенные к нижнему регистру),
// а значения — это то, сколько раз слово встретилось в предложении.
// Слова в предложении могут находиться в разных регистрах.
// Перед подсчетом их нужно приводить в нижний регистр, чтобы не пропускались дубли.
import _ from 'lodash';

function countWords(sentance) {
  const result = {};
  const splitedSentance = sentance.split(' ');
  const sentanceToLowerCase = (_.words(sentance.toLowerCase()));
  for (const word of sentanceToLowerCase) {
    if (Object.hasOwn(result, word)) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
  }

  return result;
}

export default countWords;

// const text1 = 'one two three two ONE one wow';
// const text2 = 'another one sentence with strange Words words';
// console.log(countWords(text1));
// console.log(countWords(text2));
