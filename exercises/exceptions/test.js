const reliableMultiply = require('./repeat.js');
const assert = require('chai').assert;
const boxWork = require('./box.js');

describe('Exceptions: ', function () {
  it('should multiply correctly and not throw', function () {
    const tests = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        tests.push({ a: i, b: j, expectedResult: i * j })
      }
    }
    tests.forEach(test => assert.equal(reliableMultiply(test.a, test.b), test.expectedResult));
  });

  it('locked box', function () {
    assert.isTrue(boxWork());
  });
});