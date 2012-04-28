/*
 * This is an attempt to work with jasmine and javascript and is an
 * implementation of the StringCalculator kata found at:
 * http://osherove.com/tdd-kata-1/
 */
describe('the StringCalculator object', function() {
	describe('instantiation', function() {
		it('throws an exception if you forget "new"', function() {
			var thrown;
			try {
				var v = StringCalculator();
			} catch (e) {
				thrown = e;
			}
			expect(thrown).toBe('Remember to use new on constructors!');
		});
	});
	describe('add', function() {
		it('returns 0 when passed ""', function() {
			var cut = new StringCalculator();
			var result = cut.add('');
			expect(result).toEqual(0);
		});
		it('returns 0 when passed " "', function() {
			var cut = new StringCalculator();
			var result = cut.add(' ');
			expect(result).toEqual(0);
		});
		it('returns 1 when passed "1"', function() {
			var cut = new StringCalculator();
			var result = cut.add('1');
			expect(result).toEqual(1);
		});
		it('returns 1 when passed " 1 "', function() {
			var cut = new StringCalculator();
			var result = cut.add(' 1 ');
			expect(result).toEqual(1);
		});
		it('returns 2 when passed "1,1"', function() {
			var cut = new StringCalculator();
			var result = cut.add('1,1');
			expect(result).toEqual(2);
		});
	});
});
