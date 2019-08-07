const assert = require('chai').assert;
const VectorES5 = require('./vector.js');
describe('Vector', function () {
  it('should create vectors', function () {
    let a = new VectorES5(1, 2, 3, 3);
    let b = new VectorES5(2, 3, 8, 5);
    assert.equal(JSON.stringify(a), JSON.stringify({x: 2, y: 1}));
    assert.equal(JSON.stringify(b), JSON.stringify({x: 6, y: 2}));
  });

  it('should get length', function () {
    let a = new VectorES5(1, 2, 5, 5);
    let b = new VectorES5(2, 3, 7, 15);
    assert.equal(a.length, 5);
    assert.equal(b.length, 13);
  });

  it('should add vectors', function () {
    let a = new VectorES5(1, 2, 3, 3);
    let b = new VectorES5(2, 3, 8, 5);
    let c = new VectorES5(2, 2, 3, 3);
    assert.equal(JSON.stringify(a.plus(b)), JSON.stringify({x: 8, y: 3}));
    assert.equal(JSON.stringify(c.plus(a, b)), JSON.stringify({x: 9, y: 4}));
  });
});