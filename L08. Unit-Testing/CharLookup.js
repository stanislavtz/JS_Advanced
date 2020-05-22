let assert = require('chai').assert;

describe("lookupChar functionality", function () {
    let expectedResult;
    let actualResult;
    
    beforeEach(function () {
        expectedResult = null;;
        actualResult = null;
    })

    it("Returns undefine if not string passed in as first parameter", function () {
        expectedResult = undefined;
        actualResult = lookupChar(5, 5);

        assert.equal(expectedResult, actualResult);
    });

    it("Returns undefine if not integer passed in as second parameter", function () {
        expectedResult = undefined;
        actualResult = lookupChar('asd', 5.5);

        assert.equal(expectedResult, actualResult);
    });

    it("Returns \"Incorrect index\" if index is bigger than string.length", function () {
        expectedResult = "Incorrect index";
        actualResult = lookupChar("asdf", 4);

        assert.equal(expectedResult, actualResult);
    });
    
    it("Returns \"Incorrect index\" if index is negative", function () {
        expectedResult = "Incorrect index";
        actualResult = lookupChar("asdf", -1);

        assert.equal(expectedResult, actualResult);
    });
    
    it("Returns correct char", function () {
        expectedResult = "f";
        actualResult = lookupChar("asdf", 3);

        assert.equal(expectedResult, actualResult);
    });
});