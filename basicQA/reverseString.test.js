const reverseStr = require("./reverseString");
var expect = require("chai").expect;

describe('reverse string', () => {
    it('should reverse the given string', () => {
        let values = reverseStr("javascript");
        expect(values).to.eql("tpircsavaj")
    })
})