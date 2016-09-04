exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var strArr = str.split('');
    var reducedStr = '';
    var counter;
    var currentCh;
    strArr.forEach(function(ch) {
      if (ch !== currentCh) {
        counter = 0;
      }
      counter++;
      currentCh = ch;
      if (counter <= amount) {
        reducedStr += ch;
      }
    })
    return reducedStr;
  },

  wordWrap: function(str, cols) {
    var strArr = str.split(' ');
    var strWrap = '' + strArr[0];
    for (var i = 1; i < strArr.length; i++) {
      var word = strArr[i];
      if (word.length > cols) {
        strWrap +=  word ;
      } else {
          if (strWrap.length + word.length > cols) {
            strWrap += '\n' + word ;
          } else {
            strWrap += ' ' + word;
          }
      }

    }
    return strWrap;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('')
  }
};
