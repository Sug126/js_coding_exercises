import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} from "../challenges/exercise007.js";

describe("sumDigits", () => {
  test("returns the sum of all its digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(181)).toBe(10);
  });
});

describe("createRange", () => {
  test("returns range of numbers as an array", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(2, 7)).toEqual([2, 3, 4, 5, 6, 7]);
  });
});

describe("getScreentimeAlertList", () => {
  test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
      const users = [
          {
              username: "beth_1234",
              name: "Beth Smith",
              screenTime: [
                  { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                  { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                  { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                  { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
              ]
          },
          {
              username: "sam_j_1989",
              name: "Sam Jones",
              screenTime: [
                  { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                  { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                  { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
              ]
          }
      ];
      expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
      expect(getScreentimeAlertList(users, "2019-05-03")).toEqual([]);
      expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]);

  });
});
        
       
describe('hexToRGB', ()=>{
  test("returns rgb code for hex code",()=>{
    expect(hexToRGB("#FFB6C1")).toBe("rgb(255,182,193)")

  })
})

describe("findWinner", () => {
  test("provides correct winner", () => {
      expect(findWinner(
          [
              ["X", "0", null],
              ["X", null, "0"],
              ["X", null, "0"]
          ]
      )).toBe("X");
      expect(findWinner(
          [
              ["0", "X", null],
              ["0", null, "X"],
              ["0", null, "X"]
          ]
      )).toBe("0");
      expect(findWinner(
          [
              ["X", "0", null],
              ["X", "X", "0"],
              ["0", null, "X"]
          ]
      )).toBe("X");
      expect(findWinner(
          [
              ["X", "X", "0"],
              ["X", "0", "X"],
              ["0", null, "0"]
          ]
      )).toBe("0");
      expect(findWinner(
          [
              ["X", "0", null],
              ["X", null, "0"],
              ["0", null, "X"]
          ]
      )).toBe(null);
  })
});