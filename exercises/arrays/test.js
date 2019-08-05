const flat = require('./flat.js');
const assert = require('chai').assert;

describe('Array', function () {
  it('[[1, 2], 3, [4, [5, [6]]]] = [1, 2, 3, 4, 5, 6]', function () {
    const flatRes = JSON.stringify(flat([[1, 2], 3, [4, [5, [6]]]]));
    const realRes = JSON.stringify([1, 2, 3, 4, 5, 6]);
    assert.equal(flatRes, realRes);
  });

  it('[[a,b,[c,d,e]],f,[g,h]] = [a,b,c,d,e,f,g,h]', function () {
    const flatRes = JSON.stringify(flat([['a','b',['c','d','e']],'f',['g','h']]));
    const realRes = JSON.stringify(['a','b','c','d','e','f','g','h'],);
    assert.equal(flatRes, realRes);
  });
});