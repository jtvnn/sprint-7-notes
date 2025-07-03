const { getByAltText } = require("@testing-library/dom");
const { isPalindrome } = require("./palindrome");

describe("palindrome function", () => {
  test("testing with MADAM", () => {
    const res = isPalindrome("madam");

    expect(res).toBeTruthy();
  });

  test("testing with Baguette", () => {
    const res = isPalindrome("Baguette");

    expect(res).toBeFalsy();
  });

  test("testing with RaceCar", () => {
    const res = isPalindrome("RaceCar");

    expect(res).toBeTruthy();
  });

  test("testing with teddy roosevelt", () => {
    const res = isPalindrome("a man, a plan, a canal, panama");

    expect(res).toBeTruthy();
  });
});
