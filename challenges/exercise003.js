export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let arr = []
  nums.map((num) =>{
     arr.push(num*num)
  })
  return arr
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  const camelCase = words.map((word, i)=>{
    if(i >0){
      return word.charAt(0).toUpperCase() + word.substring(1)
    }else{
      return word
    }
  })
   return camelCase.join('')
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return people.map((p)=>p.subjects.length)
                .reduce((prev, acc) => prev + acc)
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
   const ingre = menu.flatMap((m) => m.ingredients)
                 .filter((ingred) => ingred === ingredient)
  
  let hasIngredient = ingre.length === 0 ? false: true
  return hasIngredient


}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  const sortedArr = arr1.flatMap((num1) => arr2.filter((num2)=> num1=== num2 ))
                        .sort((a,b)=> a -b)

  const duplicatedArr = [...new Set([...sortedArr])]                      
  return duplicatedArr

 
}
