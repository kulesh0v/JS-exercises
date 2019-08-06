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
      let singleQuotesEx = "\'You must know I'm very upset,\' I snarled. \'I even paid extra to insure the package!\'\n\t" +
        "\'Ms. Sullivan, please lower your voice,\' the agent drawled. \'I'll search the system now.\'\n\t"+
        "\'Sheila Sullivan? Is this your package?\' I didn't know where the man appeared from, but I wanted to reach over\n\t" +
        " the counter and give him a big, fat kiss. I'd never been so happy to see a cardboard box.\n\t";
      let doubleQuotesEx = "\"You must know I'm very upset,\" I snarled. \"I even paid extra to insure the package!\"\n\t" +
      "\"Ms. Sullivan, please lower your voice,\" the agent drawled. \"I'll search the system now.\"\n\t"+
      "\"Sheila Sullivan? Is this your package?\" I didn't know where the man appeared from, but I wanted to reach over\n\t" +
      " the counter and give him a big, fat kiss. I'd never been so happy to see a cardboard box.\n\t";
      it(singleQuotesEx + doubleQuotesEx,
        function () {
          assert.equal(changeQuotes(singleQuotesEx), doubleQuotesEx)
        });
    });
    describe('Numbers', function () {
      it('Numbers: "1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4"', function () {
        assert.isTrue(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"].every(isNumber));
      });
      it('Not numbers: "1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."', function () {
        assert.isFalse(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."].some(isNumber));
      });
    })
  }
);