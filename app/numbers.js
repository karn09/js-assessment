exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var bin = num.toString(2);
    return Number(bin.split('').reverse()[bit - 1]);
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    var bin = num.toString(2);
    var binLen = bin.length;
    if (binLen < 8) {
      var diff = 8 - binLen;
      while (diff > 0) {
        bin = '0'.concat(bin);
        diff--;
      }
    }
    return bin;
  },

  multiply: function(a, b) {
    var cF = 10;
    return (a * cF) * (b * cF) / (cF * cF);
  }
};
