export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  const reversedNum = n.toString().split("").reverse().join("");
  return +reversedNum
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flatMap((num) => num).reduce((prev, acc) => prev + acc);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    const firstNum = arr.shift();
    const lastNum = arr.pop();
    arr.unshift(lastNum);
    arr.push(firstNum);
    return arr;
  } else return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
};
