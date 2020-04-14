let mathEnforcer = require('./functionality');
let assert = require('chai').assert;

describe('mathEnforcer() functionaity', () => {
    describe('addFive functionality', () => {
        it('check if given parameter is not a number', () => {
            let result = mathEnforcer.addFive('5');
            assert.equal(result, undefined);
        });

        it('check if given parameter is an integer number', () => {
            assert.equal(mathEnforcer.addFive(1), 6);
        });

        it('check if given parameter is a floating point number', () => {
            assert.equal(mathEnforcer.addFive(-1), 4);
        });

        it('check if given parameter is a floating point under the integer number', () => {
            assert.closeTo(mathEnforcer.addFive(0.99), 6, 0.01);
        });
    });

    describe('subtractTen functionality', () => {
        it('check if given parameter is not a number', () => {
            let result = mathEnforcer.subtractTen('5');
            assert.equal(result, undefined);
        });

        it('check if given parameter is an integer number', () => {
            assert.equal(mathEnforcer.subtractTen(11), 1);
        });
        
        it('check if given parameter is a floating point number', () => {
            assert.equal(mathEnforcer.subtractTen(-1), -11);
        });

        it('check if given parameter is a floating point under the integer number', () => {
            assert.closeTo(mathEnforcer.subtractTen(9.99), 0, 0.01);
        });
    });

    describe('sum functionality', () => {
        it('check if first parameter is not a number', () => {
            assert.equal(mathEnforcer.sum([], 5), undefined)
        });

        it('check if second parameter is not a number', () => {
            assert.equal(mathEnforcer.sum(5, []), undefined)
        });

        it('check if sum of integers is correct', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2);
        });  

        it('check if main sum of floating points numbers is correct', () => {
            assert.equal(mathEnforcer.sum(1.1, 1.1), 2.2);
        });

        it('check if sum 1 of floating points numbers is correct', () => {
            assert.closeTo(mathEnforcer.sum(8.99, 1), 10, 0.01);
        });
    });
});