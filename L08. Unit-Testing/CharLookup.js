let lookupChar = require('./functionality');
let assert = require('chai').assert;

describe('check lookupChar() functionality and behavoire', () => {
    it('check if first argument is not string', () => {
        let result = lookupChar([], 3);

        assert.equal(result, undefined);
    });

    it('check if second argument is not integer number', () => {
        let result = lookupChar('string', 9.8);

        assert.equal(result, undefined);
    });

    it('check if second argument is not integer number', () => {
        let result = lookupChar('string', '0');

        assert.equal(result, undefined);
    });
    
    it('check if index is bigger then string legth', () => {
        assert.equal(lookupChar('foo', 3), "Incorrect index");        
               
    });
    
    it('check if index is negative', () => {
        assert.equal(lookupChar('foo', -1), "Incorrect index"); 
    });
    
    it('check if result is correct', () => {
         let result = lookupChar('string', 0);
         assert.equal(result, 's');
    });

    it('check if result is correct', () => {
        let result = lookupChar('string', 'string'.length - 1);
        assert.equal(result, 'g');
   });
});