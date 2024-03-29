const { add, subtract } = require("../app/calculator.js");

describe("add function", () => {
  it("should return the sum of two numbers", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it("should return seven", () => {
    const result = subtract(7,0);
    expect(result).toBe(7);
  });

  it("should return a negative number when one of the numbers is negative", () => {
    const result = add(-5, 3);
    expect(result).toBe(-2);
  });

  it("should return eight", () => {
    const result = add(5, 3);
    expect(result).toBe(8);
  });
});
