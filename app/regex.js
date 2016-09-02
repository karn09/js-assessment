exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /(\D)(\1)/.test(str)
  },

  endsWithVowel: function(str) {
    return /([aA]|[eE]|[iI]|[oO]|[uU])$/.test(str)
  },

  captureThreeNumbers: function(str) {
    var found = str.match(/\d{3}/);
    return found ? found[0] : false;
  },

  matchesPattern: function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str)
  },

  isUSD: function(str) {

  }
};
