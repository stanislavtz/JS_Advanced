let isOddOrEven = require('./functionality');
let assert = require('chai').assert;

describe('test isOddOrEven() behaviore', () => {
    it('check if result is undefined when number is given', () => {
        let result = isOddOrEven(5)
        assert.equal(result, undefined);
    });

    it('check if result is undefined when boolean is given', () => {
        let result = isOddOrEven(true)
        assert.equal(result, undefined);
    });

    it('check if string length is even', () => {
        let result = isOddOrEven('string');
        assert.equal(result, 'even');
    });

    it('check if string length is odd', () => {
        let result = isOddOrEven('strng');
        assert.equal(result, 'odd');
    });
});