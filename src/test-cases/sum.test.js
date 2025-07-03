const sum = require("./sum");

describe("sum function", () => {
  test("adds two numbers correctly", () => {
    const value1 = 1;
    const value2 = 2;
    const expectedResult = 3;
    const actualResult = sum(value1, value2);

    expect(actualResult).toEqual(expectedResult);
  });

  test("adds negative numbers correctly", () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});
