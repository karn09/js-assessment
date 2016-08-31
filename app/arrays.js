exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        return i
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(function(val) {
      return val !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    var len = arr.length
    for (var i = 0; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var arr1Len = arr1.length;
    var arr2Len = arr2.length;
    var lgArr = (arr1Len >= arr2Len) ? arr1 : arr2;
    var smArr = (arr1Len < arr2Len) ? arr1 : arr2;
    var idx = 0;
    while (idx < smArr.length) {
      this.append(lgArr, smArr[idx]);
      idx++;
    }
    // OR return arr1.concat(arr2);
    return lgArr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(function(val) {
      if (val === item) {
        count++;
      }
    })
    return count;
  },

  duplicates: function(arr) {
    var dupesArr = [];
    var arrLen = arr.length;
    var seen = {};
    for (var i = 0; i < arrLen; i++) {
      var key = arr[i];
      if (!seen[key]) {
        seen[key] = 1;
      } else {
        seen[key]++;
      }
    }
    for (var key in seen) {
      if (seen[key] > 1) {
        dupesArr.push(Number(key) || key);
      }
    }
    return dupesArr;
  },

  square: function(arr) {
    return arr.map(function(val) {
      return val * val;
    })
  },

  findAllOccurrences: function(arr, target) {
    var seenArr = [];
    arr.forEach(function(val, idx) {
      if (val === target) {
        seenArr.push(idx);
      }
    })
    return seenArr;
  }
};
