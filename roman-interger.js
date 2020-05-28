// thought process

// i = 1
// MCMXCIV
  //  if number on the left is smaller than right get the difference
// 1000 
//   900
//   90
//   4

// store all nums in an array 
//loop through the string getting each value to get the value 
//get the key from the object 
// compare value on right to left

// const romanToInt = (s) => {
// const mapings = { 'I':1, 'V': 5, 'X':10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
// let total = 0
// for (let i=0; i< s.length; i++) {
//   let currentValue = mapings[s.charAt(i)]
//   let nextValue = mapings[s.charAt(i+1)]
// if(nextValue) {
//   if(currentValue >= nextValue) {
//     total += currentValue;
//   } else {
//     total += (nextValue - currentValue)
//     i++
//   }
// }  else {
//   total += currentValue
// }
//  }
//  return total

// }

// sloution 2 

const romanToInt = (s) => {
const mapings = { 'I':1, 'V': 5, 'X':10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
let value = 0;
for(let i = 0; i < s.length; i+=1){
  mapings[s[i]] < mapings[s[i+1]] ? value -= mapings[s[i]]: value += mapings[s[i]]
}
return value
}
romanToInt("MCMXCIV")

//50 5 1 1 1