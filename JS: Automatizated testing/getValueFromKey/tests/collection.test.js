import functions from '../src/functions.js';

const get = functions();
const obj = { hello: 'world' };

if ((get(obj, 'hello')) !== 'world') {
  throw new Error('First condition failed');
}

if ((get(obj, 'key', 'default')) !== 'default') {
  throw new Error('Second condition failed');
}

if ((get(obj, 'hello', 'default')) !== 'world') {
  throw new Error('Third condition faield');
}

console.log('All tests has passed');

// node collection.test.js
