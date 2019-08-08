const assert = require('chai').assert;
const Vector = require('./scripts/vector.js');
describe('Vector', function () {
  it('should compare vectors', function () {
    const a1 = new Vector(1, 2, 3, 3);
    const a2 = new Vector(1, 2, 3, 3);
    const b = new Vector(1, 3, 4, 5);
    assert(a1.isEqual(a1), 'true');
    assert(a1.isEqual(a2), 'true');
    assert(!b.isEqual(a1), 'false');
  });

  it('should create vectors', function () {
    const a = new Vector(1, 2, 3, 3);
    const b = new Vector(2, 3, 8, 5);
    assert(a.isEqual({x: 2, y: 1}), 'a');
    assert(b.isEqual({x: 6, y: 2}), 'b');
  });

  it('should get length', function () {
    const a = new Vector(1, 2, 5, 5);
    const b = new Vector(2, 3, 7, 15);
    assert.equal(a.length, 5);
    assert.equal(b.length, 13);
  });

  it('should add vectors', function () {
    const a = new Vector(1, 2, 3, 3);
    const b = new Vector(2, 3, 8, 5);
    const c = new Vector(2, 2, 3, 3);
    assert((a.plus(b)).isEqual({x: 8, y: 3}), 'ab');
    assert(c.plus(a, b).isEqual({x: 9, y: 4}), 'cab');
  });
});