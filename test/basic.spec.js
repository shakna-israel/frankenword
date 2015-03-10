var frankenword = require('../frankenword');
var frankenwordInSentence = 'The word backronym is a frankenword.';
var goodSentence = 'The good dog jumps over the bad cat.';

describe('frankenword', function () {

  describe('a sentence containing a frankenword', function() {
    var results = null;

    beforeEach(function() {
      results = frankenword(frankenwordInSentence);
    });

    it('will not escape notice', function () {
      expect(results).toEqual([{ index : 9, offset : 9 },{ index: 24, offset: 11 }]);
    });
  })

  it('should not have a problem with a short sentence', function () {
    expect(frankenword(goodSentence)).toEqual([]);
  });
});
