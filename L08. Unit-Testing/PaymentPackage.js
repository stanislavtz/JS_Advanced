let assert = require("chai").assert;

describe("PaymentPackage functionality", () => {
    let expectedResult;
    let actualResult;
    let pp;

    beforeEach(() => {
        pp = new PaymentPackage("Boat", 25000);
        expectedResult = null;
        actualResult = null;
    });

    describe("constructor functionality", () => {
        it("creates an object by given name and value", () => {
            assert.equal("Boat", pp.name);
            assert.equal(25000, pp.value);
            assert.equal(20, pp.VAT);
            assert.equal(true, pp.active);
        });

        it("throws if not correct atributes are given", () => {
            let willThrow = () => pp = new PaymentPackage(123, 100);
            assert.throws(willThrow, "Name must be a non-empty string");

            willThrow = () => pp = new PaymentPackage("service", "100");
            assert.throws(willThrow, "Value must be a non-negative number");
        });
    });

    describe("name, validator functionality", () => {
        it("throws error in not valud value is set", () => {
            let willThrow = () => pp.name = true;
            assert.throws(willThrow, "Name must be a non-empty string");

            willThrow = () => pp.name = '';
            assert.throws(willThrow, "Name must be a non-empty string");
        });

        it("set the new value to the object propertie", () => {
            pp.name = "Car";
            assert.equal("Car", pp.name)
            assert.equal(pp._name, pp.name);
        });
    });

    describe("value, validator functionality", () => {
        it("throws error in not valud value is set", () => {
            let willThrow = () => pp.value = true;
            assert.throws(willThrow, "Value must be a non-negative number");

            willThrow = () => pp.value = -0.1;
            assert.throws(willThrow, "Value must be a non-negative number");
        });

        it("set the new value to the object propertie", () => {
            pp.value = 25550.22;
            assert.equal(25550.22, pp.value);
            assert.equal(pp._value, pp.value);
        });
    });

    describe("VAT, validator functionality", () => {
        it("throws error in not valud value is set", () => {
            let willThrow = () => pp.VAT = true;
            assert.throws(willThrow, "VAT must be a non-negative number");

            willThrow = () => pp.VAT = -10;
            assert.throws(willThrow, "VAT must be a non-negative number");
        });

        it("set the new VAT to the object propertie", () => {
            pp.VAT = 10;
            assert.equal(10, pp.VAT);
            assert.equal(pp._VAT, pp.VAT);
        });
    });

    describe("active, validator functionality", () => {
        it("throws error in not valud value is set", () => {
            let willThrow = () => pp.active = 5;
            assert.throws(willThrow, "Active status must be a boolean");

            willThrow = () => pp.active = "true";
            assert.throws(willThrow, "Active status must be a boolean");
        });

        it("set the new active value, to the object propertie", () => {
            pp.active = false;
            assert.equal(false, pp.active);
            
            pp.active = true;
            assert.equal(true, pp.active);
            
            assert.equal(pp._active, pp.active);
        });
    });

    describe("toString method functionality", () => {
        it("returns properly information if package is active", () => {
            expectedResult = [
                "Package: Boat",
                "- Value (excl. VAT): 25000",
                "- Value (VAT 20%): 30000"
            ];

            actualResult = pp.toString();

            assert.equal(expectedResult.join('\n'), actualResult)
        });

        it("returns properly information if package is not active", () => {
            pp.active = false;
            expectedResult = [
                "Package: Boat (inactive)",
                "- Value (excl. VAT): 25000",
                "- Value (VAT 20%): 30000"
            ];

            actualResult = pp.toString();

            assert.equal(expectedResult.join('\n'), actualResult)
        });

        it('if VAT and value are 0', () => {
            pp = new PaymentPackage('test', 0);
            pp.VAT = 0;
            pp.active = false;
            expectedResult = [
                `Package: test (inactive)`,
                `- Value (excl. VAT): 0`,
                `- Value (VAT 0%): 0`
            ];
            
            actualResult = pp.toString();

            assert.equal(expectedResult.join('\n'), actualResult);
        });
    });

    describe("class properties", () => {
        it("class contains the properties below", () => {
            assert.equal(true, Object.getPrototypeOf(pp).hasOwnProperty("name"));
            assert.equal(true, Object.getPrototypeOf(pp).hasOwnProperty("value"));
            assert.equal(true, Object.getPrototypeOf(pp).hasOwnProperty("VAT"));
            assert.equal(true, Object.getPrototypeOf(pp).hasOwnProperty("active"));
            assert.equal(true, Object.getPrototypeOf(pp).hasOwnProperty("toString"));
        })
    });
});