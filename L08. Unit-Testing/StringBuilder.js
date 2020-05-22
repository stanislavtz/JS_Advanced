let assert = require('chai').assert;

describe("StringBuilder functionality", () => {
    let expectedResult;
    let actualResult;

    beforeEach(() => {
        sb = new StringBuilder("Hello");
        expectedResult = null;
        actualResult = null;
    });

    describe("constructor functionality", () => {
        it("create a StringBuilder with given not string input", () => {
            let sb1 = new StringBuilder();
            expectedResult = [];
            actualResult = sb1._stringArray;

            assert.deepEqual(expectedResult, actualResult);
            assert.isArray(sb1._stringArray);
        });

        it("create a Stringbuilder with passed string", () => {
            expectedResult = [..."Hello"];
            actualResult = sb._stringArray;

            assert.deepEqual(expectedResult, actualResult);
        });
    });

    describe("append method functionality", () => {
        it("appends given string to the initial one", () => {
            sb.append(", world!");
            expectedResult = ",";
            actualResult = sb._stringArray[5];

            assert.equal(expectedResult, actualResult);
        });

        it("increase the length of the initial string", () => {
            sb.append(" it's me");
            assert.equal(13, sb.toString().length)
        })

        it("Throws error if not string is passed it", () => {
            let willThrow = () => sb.append();
            assert.throws(willThrow, "Argument must be string");
        });
    });

    describe("prepend method functionality", () => {
        it("preprends string toh e initial one", () => {
            sb.prepend("Hey! ");
            expectedResult = [..."Hey! Hello"];
            actualResult = sb._stringArray;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("increase the length of the initial string", () => {
            it("increase the length of the initial string", () => {
                sb.prepend("Hi, i am ");
                assert.equal(18, sb.toString().length)
            })
        })

        it("Throws error if not string is passed it", () => {
            let willThrow = () => sb.prepend();
            assert.throws(willThrow, "Argument must be string");
        });
    });

    describe("insertAt method functionality", () => {
        it("insert a string on the given index", () => {
            let sb = new StringBuilder("Hello");
            sb.insertAt("oo", 3);

            expectedResult = [..."Heloolo"];
            actualResult = sb._stringArray;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("Throws error if not string is passed it", () => {
            let willThrow = () => sb.insertAt(5, 5);
            assert.throws(willThrow, "Argument must be string");
        });
    });

    describe("remove method functionality", () => {
        it("removes a given number of symbols after the ponted index", () => {
            sb.remove(2, 4);
            expectedResult = [..."He"];
            actualResult = sb._stringArray;

            assert.deepEqual(expectedResult, actualResult);
        });
    });

    describe("_vrfyParam static method functionality", () => {
        it("throws error if not undefine or string passed to constructor", () => {
            let sb1;
            let wilThrow = () => sb1 = new StringBuilder(5);
            assert.throws(wilThrow, "Argument must be string");
        })
    });

    describe("toString method functionality", () => {
        it("returns the new created string", () => {
            sb.prepend("Hey! ");
            sb.append(", world. The World is awesome, people should be get better!!!");

            expectedResult = "Hey! Hello, world. The World is awesome, people should be get better!!!";
            actualResult = sb.toString();

            assert.equal(expectedResult, actualResult)
        });
    });

    describe("properties and methods", () => {
        it("has property _stringArray", () => {
            assert.equal(true, sb.hasOwnProperty("_stringArray"));
        });

        it("has method append", () => {
            assert.equal(true, Object.getPrototypeOf(sb).hasOwnProperty("append"));
        });

        it("has method prepend", () => {
            assert.equal(true, Object.getPrototypeOf(sb).hasOwnProperty("prepend"));
        });

        it("has method inserAt", () => {
            assert.equal(true, Object.getPrototypeOf(sb).hasOwnProperty("insertAt"));
        });

        it("has method remove", () => {
            assert.equal(true, Object.getPrototypeOf(sb).hasOwnProperty("remove"));
        });

        it("has method toString", () => {
            assert.equal(true, Object.getPrototypeOf(sb).hasOwnProperty("toString"));
        });
    })
});