var fankenword = require('../frankenword');
var frankenwordInSentence = 'The word backronym is a frankenword.';
var goodSentence = 'The good dog jumps over the bad cat.';

describe('no-cliches', function () {

  describe('a sentence containing a frankenword', function() {
    var results = null;

    beforeEach(function() {
      results = frankenword(frankenwordInSentence);
    });

    it('will not escape notice', function () {
      expect(results).toEqual([{ index : 22, offset : 13 }]);
    });
  })

  it('should not have a problem with a short sentence', function () {
    expect(frankenword(goodSentence)).toEqual([]);
  });
});
