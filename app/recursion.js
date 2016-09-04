exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
	listFiles: function (data, dirName) {
		var files = [];
		var dirs = [];

		(function process(dir) {

			var currentDir = dir.dir;
			dirs.push(currentDir);

			dir.files.forEach(function (file) {
				if (typeof file === 'string') {
					if (!dirName || dirs.indexOf(dirName) > -1) {
						files.push(file);
					}
				} else {
					return process(file);
				}
			})
			dirs.pop();

		})(data);

		return files;
	},

	permute: function (arr) {

	},

	fibonacci: function (n) {


	},

	validParentheses: function (n) {

	}
};
