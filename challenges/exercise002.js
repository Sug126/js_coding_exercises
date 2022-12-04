export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!

  if(person.city === "Manchester"){
    return true
  }else{
    return false
  }
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let busRequired
  if(people <= 40){
    return busRequired =1
  } else if(people >= 40 && people <= 80){
    return busRequired= 2
  } else if(people >= 80 && people <= 120){
    return busRequired = 3
  }else{
    return busRequired = Math.ceil(people/40)
  }

}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let counter =0
  arr.forEach(item =>{
    if(item === 'sheep')
    counter++
  })

  return counter
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  let postalCode = person.address.postCode
  let postalCity = person.address.city
  if(postalCode.charAt(0) === 'M' && postalCity === "Manchester"){
    return true
  }else{
    return false
  }

}
