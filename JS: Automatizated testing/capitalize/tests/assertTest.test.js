import { strict as assert, equal } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert(equal(capitalize(''), ''));
assert(equal(capitalize('hello'), 'Hello'));

// node capitalize.test.js
