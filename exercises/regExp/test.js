const assert = require('chai').assert;
const changeQuotes = require('./quotes.js');
const regGolf = require('./regGolf.js');
const isNumber = require('./numbers.js');
describe('RegExp', function () {
    describe('RegGolf', function () {
      it('', function () {
        assert(regGolf(), 0);
      });
    });
    describe('Reg Quotes', function () {
      it('Hello my \'dear\' \'friend\'. I\'m miss you.\n\tHello my \"dear\" \"friend\". I\'m miss you.', function () {
        assert.equal(changeQuotes("Hello my 'dear' 'friend'. I don't miss you."), "Hello my \"dear\" \"friend\". I don't miss you.")
      });
      it('What\'s the matter?,\n\tWhat\'s the matter?', function () {
        assert.equal(changeQuotes("What's the matter?"), "What's the matter?")
      });
    });
    describe('Numbers', function () {
      it('Numbers: "1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4"', function () {
        assert.isTrue(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
          "1e+12"].every(isNumber));
      });
      it('Not numbers: "1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."', function () {
        assert.isFalse(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."].some(isNumber));
      });
    })
  }
);