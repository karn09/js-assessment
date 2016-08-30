exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    // apply obj context to fn
    return fn.apply(obj)
  },

  alterObjects: function(constructor, greeting) {
    // extend constructor prototype with greeting, return constructor.
    constructor.prototype.greeting = greeting;
    return constructor;
  },

  iterate: function(obj) {
    var resultArr = [];
    var str = '';
    for (var key in obj) {
      // check whether obj has key as direct property. 
      if (obj.hasOwnProperty(key)) {
        str = key + ': ' + obj[key];
        resultArr.push(str)
      }
    }    
    return resultArr;
  }
};
