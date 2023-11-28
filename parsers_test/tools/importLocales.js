import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// костыли для dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setPathToFixtures = () => path.join(__dirname, '..', '__fixtures__', 'translations');
// const setPathToLocales = () => path.join(__dirname, '..', 'src', 'locales');
// const setPathToLocalesFile = (pathToElement, filename) => path
//   .join(pathToElement.replace('__fixtures__', 'src')
//     .replace('translations', 'locales'), filename);
const pathToTranslations = setPathToFixtures();
// const pathToLocales = setPathToLocales();

const readFiles = (pathToElement) => {
  const content = fs.readdirSync(pathToElement);
  content.forEach((element) => {
    const isDir = fs.lstatSync(path.join(pathToElement, element)).isDirectory();
    if (isDir) {
      // если директория, то спускаемся вниз
      readFiles(path.join(pathToElement, element));
    } else {
      // иначе выводим имя файла
      // console.log(element);
      // иначе создадим константу с путем до файла и котировкой для чтения
      const fileContent = fs.readFileSync(path.join(pathToElement, element), 'utf-8');
      // запарсим
      const parsed = JSON.parse(fileContent);
      // выведем на экран запарсенные файлы translations
      console.log(parsed);

      // или поменяем путь, и вывелем locales
      // console.log(pathToElement.replace('__fixtures__', 'src').replace('translations', 'locales'));

      // или создадим новую константу с путем
      // const localeContent = fs.readFileSync(setPathToLocalesFile(pathToElement, element), 'utf-8');
      // const parcedLocale = JSON.parse(localeContent);
      // console.log(parcedLocale);
    }
  });
};

console.log(pathToTranslations);
readFiles(pathToTranslations);
