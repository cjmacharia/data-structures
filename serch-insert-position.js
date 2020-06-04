// my first solution

// var searchInsert = function(nums, target) {
//   for(let i = 0; i< nums.length; i++) {
//       if(nums[i] === target) {
//           return i
//       } else if(num[i] > target) {
//         return i
//       }  
//       if(nums.length === (i+1)) {
//           while(nums[i] > target){
//             nums[i-1]
//             i--
//           } 
//           return i+=1
//       } 
//   }
// };


// binary search  iterrative

var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length -1
 
  while (left <= right) {
   const mid = Math.floor((left + right) / 2);
   if(nums[mid] < target) 
   {
     left = mid + 1
   } else if (nums[mid] > target){
     right = mid -1
   } else {
     return mid
   }
  }
  return left
 }

