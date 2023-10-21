import reverse from '../src/index.js';
import { strict as assert } from assert;

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
// Весь не в том, чтобы сломать, а наоборот проверить, что все случаи работают как надо