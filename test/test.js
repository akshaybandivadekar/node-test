const assert = require('assert');

describe('file to be tested', () => {
    context('function to be tested', () => {
        // before(() => {
        //     console.log('=============Before===========');
        // })
        // after(() => {
        //     console.log('=============After=============');
        // })
        // beforeEach(()=> {
        //     console.log('=============Before Each===========');
        // })
        // afterEach(()=> {
        //     console.log('=============After Each===========');
        // })
        it('should be something', () => {
            assert.equal(1,1);
        });
        it('should do something else', () => {
            assert.deepEqual({ name: 'joe'}, {name: 'joe'})
        });
        it('this is pending test');
    });

    context('another function', () => {
        it('should do something');
    })
})