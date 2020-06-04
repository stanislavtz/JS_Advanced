let Parser = require("./solution");
let assert = require("chai").assert;

describe("Parser class functionality", () => {
    let expectedResult;
    let actualResult;
    let parser;
    let willThrow;

    beforeEach(() => {
        parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        expectedResult = '';
        actualResult = '';
        willThrow;
    });

    describe("constructor functionality", () => {
        it("creates a new class object, parsing to JSON the given input", () => {
            expectedResult = [{ Nancy: "architect" }, { John: "developer" }, { Kate: "HR" }];
            assert.deepEqual(expectedResult, parser._data);
            assert.deepEqual([], parser._log);
            assert.deepEqual('function', typeof parser._addToLog);
        });
    });

    describe("data getter functionality", () => {
        it("adds to log array, data getter action", () => {
            parser.data;
            actualResult = parser._log;
            expectedResult = `0: getData`;

            assert.equal(expectedResult, actualResult)
        });

        it("returns proper _data array", () => {
            actualResult = parser.data;
            expectedResult = [{ Nancy: "architect" }, { John: "developer" }, { Kate: "HR" }];

            assert.deepEqual(expectedResult, actualResult);
        })
    });

    describe("print method functionality", () => {
        it("adds to log array print info", () => {
            parser.print();
            actualResult = parser._log;
            expectedResult = `0: print`;

            assert.equal(expectedResult, actualResult)
        });

        it("returns a proper message like a table", () => {
            expectedResult = `id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR`;
            actualResult = parser.print();

            assert.equal(expectedResult,actualResult)
        });
    });

    describe("addEntries method functionality", () => {
        it("adds to log array addEntries action", () => {
            parser.addEntries('Steven:tech-support Edd:administrator');
            actualResult = parser._log;
            expectedResult = `0: addEntries`;

            assert.equal(expectedResult, actualResult)
        });

        it("adds to data, passed info", () => {
            actualResult = parser.addEntries('Steven:tech-support Edd:administrator');
            expectedResult = [{ Nancy: "architect" }, { John: "developer" }, { Kate: "HR" }, {Steven: "tech-support"}, {Edd: "administrator"}];

            assert.deepEqual(expectedResult, parser.data)
        });

        it("return proper message", () => {
            actualResult = parser.addEntries('Steven:tech-support Edd:administrator');
            expectedResult = "Entries added!";

            assert.equal(expectedResult, actualResult);
        })
    });

    describe("removeEntry method functionality", () => {
        it("adds to log array removeEntry action", () => {
            parser.removeEntry('Kate');
            actualResult = parser._log;
            expectedResult = `0: removeEntry`;

            assert.equal(expectedResult, actualResult)
        });

        it("returns roper messages", () => {
            actualResult = parser.removeEntry('Kate');
            expectedResult = "Removed correctly!";

            assert.equal(expectedResult, actualResult);
        });

        it("removes entries from a data array", () => {
            actualResult = parser.removeEntry('Kate');
            expectedResult = [{ Nancy: "architect" }, { John: "developer" }];

            assert.deepEqual(expectedResult, parser.data)
        })
    });
});