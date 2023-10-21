import { strict as assert } from 'assert';
import functions from '../src/functions.js';

const indexOf = functions();

assert(indexOf(['one', 'two', 8], 'one') === -1);
assert(indexOf([1, 8, 9, 3, 9], 9) === 2);
assert(indexOf([1, 8, 9, 3, 9], 9, 3) === 4);
assert(indexOf([], 9) === -1);

// node indexOf.test.js
