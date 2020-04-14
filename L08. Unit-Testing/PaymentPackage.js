let PaymentPackage = require('./functionality');
let assert = require('chai').assert;


describe('PaymentPackage', () => {
    let actualResult;
    let expectedResult;
    let pack;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
        pack = new PaymentPackage('name', 100);
    })
    
    describe('check constructor', () => {
        it('if incorrect name, throw error', () => {
            assert.throw(() => {pack.name = 5}, 'Name must be a non-empty string');
        });

        it('if incorrect value, throw error', () => {
            assert.throw(() => {pack.value = -1}, 'Value must be a non-negative number');
        });

        it('if correct VAT', () => {
            assert.equal(pack.VAT, 20);
        });

        it('if incorrect VAT, throw error', () => {
            assert.throw(() => {pack.VAT = -1}, 'VAT must be a non-negative number');
        });

        it('if correct active', () => {
            assert.equal(pack.active, true);
        });

        it('if incorrect active ,throw error', () => {
            assert.throw(() => {pack.active = undefined}, 'Active status must be a boolean');
        });
    });

    describe ('check toSrting method', () => {
        it('if work correct with active = false', () => {
            pack.active = false;
            actualResult = pack.toString();
            expectedResult = 
                 `Package: ${pack.name} (inactive)\n`
                +`- Value (excl. VAT): ${pack.value}\n`
                +`- Value (VAT ${pack.VAT}%): ${pack.value * (1 + pack.VAT / 100)}`;

            assert.equal(actualResult, expectedResult);
        });

        it('if VAT and value are 0', () => {
            pack = new PaymentPackage('test', 0);
            pack.VAT = 0;
            pack.active = false;
            actualResult = pack.toString();
            expectedResult = 
                 `Package: ${pack.name} (inactive)\n`
                +`- Value (excl. VAT): ${pack.value}\n`
                +`- Value (VAT ${pack.VAT}%): ${pack.value * (1 + pack.VAT / 100)}`;

            assert.equal(actualResult, expectedResult);
        })
    });
});
