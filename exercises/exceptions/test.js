const reliableMultiply = require('./repeat.js');
const assert = require('chai').assert;
const boxWork = require('./box.js');

describe('Exceptions: ', function () {
  it('reliableMultiply(8, 8)', function () {
    const flatRes = reliableMultiply(8, 8);
    const realRes = 64;
    assert.equal(flatRes, realRes);
  });

  it('reliableMultiply(3, 3)', function () {
    const flatRes = reliableMultiply(3, 3);
    const realRes = 9;
    assert.equal(flatRes, realRes);
  });

  it('reliableMultiply(2, 2)', function () {
    const flatRes = reliableMultiply(2, 2);
    const realRes = 4;
    assert.equal(flatRes, realRes);
  });

  it('reliableMultiply(25, 25)', function () {
    const flatRes = reliableMultiply(25, 25);
    const realRes = 625;
    assert.equal(flatRes, realRes);
  });

  it('locked box', function () {
    assert.isTrue(boxWork());
  });
});