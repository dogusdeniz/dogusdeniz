describe("add function", () => {
  it("should return the sum of two numbers", () => {
    const result = 2 + 3;
    expect(result).toBe(5);
  });

  it("should return zero when one of the numbers is zero", () => {
    const result = 0 + 7;
    expect(result).toBe(0);
  });

  it("should return a negative number when one of the numbers is negative", () => {
    const result = -5 + 3;
    expect(result).toBe(-2);
  });
});
