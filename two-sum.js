
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice


// thought process : create a map to store the number we iterate through, 
//go through the array  of numbers provided
// take number minus the target if result is in the map, those are the two numbers we want

// const twoSum = (arr, target) => {   // example 1
//    let numberIndex = new Map();
//    let result = [];
//    for (let i=0; i< arr.length; i++) {
//      let num = arr[i]
//      let value = target - num
//      if (numberIndex.has(value)) {
//        console.log(numberIndex)
//        result[0] = numberIndex.get(value);
//        result[1] = i;
//         return result
//      }



//      numberIndex.set(arr[i], i)
//     }
// //     console.log(result, 'oo')
//     return result
// }

// var twoSum = function(nums, target) {    // example 2
//   const hash = {};
//   for (let i = 0; i < nums.length; i += 1) {
//   let compliment = target - nums[i];
//   console.log(compliment)
//   // compliment = 11  //0
//     console.log(hash[nums[i]])

//   if ( hash[nums[i]] >= 0) {     //chack if value exists as a complement in the hash
//     return [hash[nums[i]], i];
//   }
//   else {
//   hash[compliment] = i;
//   // { '7': 2, '9': 1, '11': 0 }
//   }
//   }
//   };


// [2,4,5,6] target 9


// {'7': 0, '5': '1',  }
const twoSum = (nums, target) => {
const hash = new Map();
for(i = 0; i < nums.length; i++) {
  const compliment = target - nums[i]
  if(hash.has(nums[i])) {
    return [hash.get(nums[i]), i]
  }
  else {
     hash.set(compliment, i)
  }
}
}

twoSum([6,4,2,7], 13)



