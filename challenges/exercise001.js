// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let splitWord = word.toLowerCase()
  return word.charAt(0).toUpperCase() + splitWord.slice(1)
  
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!

  return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase()
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  let addedVAT = (originalPrice/100)* (vatRate+100)
  if(Number.isInteger(addedVAT)){
    return addedVAT
  } else{
    return Math.round(addedVAT*100)/100
  }
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
 let discount = originalPrice* reduction/100
 return  Math.round((originalPrice - discount)*100)/100
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  let position
  let length
  if(str.length % 2 == 1){
    position = str.length/2
    length = 1
  } else{
    position = str.length/2 -1
    length = 2
  }

  return str.substring(position, position + length)
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.split('').reverse().join('')
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let result = words.map(word => word.split('').reverse().join(''));
 return result
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
   let linuxUser = users.filter(user => user.type === 'Linux')
   return linuxUser.length
 
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let mean = scores.reduce((a,b)=> a +b, 0)/scores.length
  return Math.round(mean*100)/100
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if(n %3 === 0 && n%5 ===0){
    return 'fizzbuzz'
  }else if(n %3 === 0){
    return 'fizz'
  }else if(n % 5 === 0){
  return 'buzz'
  }else{
    return n
  }
}
