import { sumDigits,
         createRange } from "../challenges/exercise007.js";

describe("sumDigits", () => {
  test("returns the sum of all its digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(181)).toBe(10);
  });
});


describe("createRange", () => {
    test("returns range of numbers as an array", () => {
      expect(createRange(3, 11, 2)).toBe([3, 5, 7, 9, 11]);
      expect(createRange(2, 7)).toBe([2, 3, 4,5, 6, 7]);
    });
  });