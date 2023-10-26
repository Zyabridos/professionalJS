import { strict as assert, equal } from 'node:assert';
import getMidpoint from '../src/middlePointOfTwoPoints.js';

const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
const point3 = getMidpoint(point1, point2);

assert.equal(getMidpoint(point1, point2), { x: 2, y: 2 });
console.log(point3); // => { x: 2, y: 2 };
