exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj)
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    return constructor;
  },

  iterate: function(obj) {
    var resultArr = [];
    var str = '';
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        str = key + ': ' + obj[key];
        resultArr.push(str)
      }
    }    
    return resultArr;
  }
};
