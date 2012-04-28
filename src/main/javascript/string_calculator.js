/*
 * This is an attempt to work with jasmine and javascript and is an
 * implementation of the StringCalculator kata found at:
 * http://osherove.com/tdd-kata-1/
 */
var StringCalculator = function() {
	if(!(this instanceof StringCalculator)) {
		throw 'Remember to use new on constructors!';
	}
};
StringCalculator.prototype.add = function(numbers) {
	if (this.trim(numbers) == '') {
		return 0;
	} else {
		var numbers = numbers.split(',');
		if (numbers.length == 1) {
			return parseInt(numbers[0]);
		} else {
			return parseInt(numbers[0]) + parseInt(numbers[1]);
		}
	}
};
StringCalculator.prototype.trim = function(str) {
	return str.replace(/^\s+|\s+$/g, '');
};
