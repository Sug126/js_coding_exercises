import {
  sumMultiples,
  isValidDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the sum of any numbers which are a multiple of 3 or 5 in an array", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([2, 4])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("returns true/false for valid DNA may contain characters C, G, T or A only", () => {
    expect(isValidDNA("TCAT")).toBe(true);
    expect(isValidDNA("TTTZ")).toBe(false);
  });
});

describe("isItPrime", () => {
  test("return true/false depending on whether it is a prime number or not", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(8)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("return an array of n arrays, each filled with n items", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("return true/false depending on whether it is a prime number or not", () => {
    expect(
      areWeCovered([
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      ], 'Monday')
    ).toBe(false);
  });
});
