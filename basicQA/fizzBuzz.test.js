const fizzBuzz = require("./fizzBuzz");
var expect = require("chai").expect;

describe("fizzBuzz", () => {
  it("should return [1]", () => {
    let values = fizzBuzz(1);
    console.log(values);
    expect(values).to.eql([1]);
  });
  it("should return [1,2,fizz]", () => {
    let values = fizzBuzz(3);
    expect(values).to.eql([1, 2, "fizz"]);
  });
  it("should return [1,2,fizz,4,buzz]", () => {
    let values = fizzBuzz(5);
    expect(values).to.eql([1, 2, "fizz", 4, "buzz"]);
  });
  it("should return [1,2,fizz,4,buzz]", () => {
    let values = fizzBuzz(15);
    expect(values).to.eql([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzBuzz"
    ]);
  });
});
