// get first number in array
// chaexk if is similar to second value if similar let lengh remain same else go to next lement and add lenght by 1

var removeDuplicates = function(nums) {
  let finalLength = 1;
  let current = 0
  for (let i =1; i<nums.length; i++) {
      if(nums[current] !== nums[i]) {
        finalLength +=1
        nums.splice(current+1, 1, nums[i])
        current = nums.indexOf(nums[i])
      } 
  }
   return finalLength
}

removeDuplicates([1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,4,5,6,9,9,9,9,9])