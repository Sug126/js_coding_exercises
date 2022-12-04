export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const smallNum = nums.filter((n)=> n<1)
  return smallNum
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const namesArr = names.filter((n)=> n.charAt(0) === char)
  return namesArr
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

  const verb = words.filter((w)=> w.split(' ')[0] === 'to')
  return verb
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const integerArr = nums.filter((n) => Number.isInteger(n))
  return integerArr
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const cityArr = users.map((user)=> user.data['city']['displayName'])
  return cityArr
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const squareRootArr = nums.map((n) => +Math.sqrt(n).toFixed(2))
  return squareRootArr
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  const sentenceString = sentences.filter((sen)=> sen.toLowerCase().includes(str.toLowerCase()))
  return sentenceString
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
