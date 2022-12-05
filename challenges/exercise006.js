export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  return arr
    .filter((num) => num % 3 === 0 || num % 5 === 0)
    .reduce((prev, acc) => prev + acc, 0);
};

export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  const dnaString = /[^ACTG]/gi;
  return str.match(dnaString) === null;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
};

export const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    } else {
      return true;
    }
  }
};

export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  return Array(n)
    .fill(0)
    .map(() => {
      return Array(n).fill(fill);
    });
};

export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let count = 0;
  staff.forEach((obj) => {
    if (obj.rota.includes(day)) count++;
  });
  return count >= 3;
};
