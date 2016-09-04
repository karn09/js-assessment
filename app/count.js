exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
	count: function (start, end) {

		var countUp;
		(function countLog() {
      console.log(start++);
			if (start <= end) {
        countUp = setTimeout(countLog, 100);
      }
		})();

		return {
			cancel: function () {
				clearTimeout(countUp);
			}
		}
	}
};
