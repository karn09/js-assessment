exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];

    (function process(dir) {
        dir.files.forEach(function (file) {
          if (typeof file === 'string') {
            files.push(file);
          } else {
            return process(file);
          }
        })
    })(data);

    return files;
  },

  permute: function(arr) {
    var permArr = [];

    return permArr;
  },

  fibonacci: function(n) {


  },

  validParentheses: function(n) {

  }
};
