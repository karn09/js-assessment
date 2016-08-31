exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(val) {
      return str + ', ' + val
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(val) {
      return fn.bind(this, val);
    })
  },

  partial: function(fn, str1, str2) {
    return fn.bind(this, str1, str2);
  },

  useArguments: function() {
    var args = Array.prototype.slice.call(arguments)
    return args.reduce(function(a, b) {
      return a + b;
    })
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var outerArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
      var args = outerArgs.concat(Array.prototype.slice.call(arguments));
      return fn.apply(this, args);
    }
  },

  curryIt: function(fn) {
    var arglen = fn.length;
    var args = [];
    return function(val) {
      args.push(val);
      if (args.length === arglen) {
        return fn.apply(this, args)
      } else {
        return arguments.callee
      }
    }
    
  }
};
