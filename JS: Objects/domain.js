// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя сайта
// и возвращает информацию о нем:
// Если домен передан без указания протокола,
// то по умолчанию берется http
import _ from 'lodash';

function getDomainInfo(websiteName) {
  if (!(websiteName.startsWith('h'))) {
    websiteName = `http://${websiteName}`;
  }
  const parts = websiteName.split('://');
  const scheme = _.first(parts);
  const name = _.last(parts);
  const domainInfo = {
    scheme,
    name,
  };
  return domainInfo;
}

export default getDomainInfo;
