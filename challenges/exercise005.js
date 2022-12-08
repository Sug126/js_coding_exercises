export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (nums.indexOf(n) === -1 || nums.indexOf(n) === nums.length - 1)
    return null;
  return nums[nums.indexOf(n) + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  return {
    0: (str.match(/0/g) || []).length,
    1: (str.match(/1/g) || []).length,
  };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  const reversedNum = n.toString().split("").reverse().join("");
  return +reversedNum;
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
  for (let key in haystack) {
    if (
      typeof haystack[key] === "string" &&
      haystack[key].toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  const frequencies = {};
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(/\W|_/g, ""))
    .forEach((word) =>
      frequencies[word] ? (frequencies[word] += 1) : (frequencies[word] = 1)
    );
  return frequencies;
};
