let assert = require('chai').assert;

describe("isOddOrEven functionality", function () {
    let expectedResult;
    let actualResult;
    
    beforeEach(function () {
        expectedResult = null;;
        actualResult = null;
    })

    it("The given input is not a string", function () {
        expectedResult = undefined;
        actualResult = isOddOrEven(true);

        assert.equal(expectedResult, actualResult)
    });

    it("Returns odd", function () {
        expectedResult = "odd";
        actualResult = isOddOrEven("asd");

        assert.equal(expectedResult, actualResult)
    });

    it("Returns even", function () {
        expectedResult = "even";
        actualResult = isOddOrEven("asad");

        assert.equal(expectedResult, actualResult)
    });
});