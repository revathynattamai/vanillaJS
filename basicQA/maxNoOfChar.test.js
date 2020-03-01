const maxNoOfChar = require("./maxNoOfChar");
const findTheNoOccurence = require("./maxNoOfChar");
const findTheChar = require("./maxNoOfChar");
var expect = require("chai").expect;

describe('Maximum number of occuring alphabets', () => {
    it("should return empty array if no alphabet is passed", () => {
        maxNoOfChar('a');
        expect(findTheNoOccurence).toHaveBeenCalledTimes(1);
        // expect(result).to.eql([]);
    })
})