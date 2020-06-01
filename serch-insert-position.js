// my solution

var searchInsert = function(nums, target) {
  for(let i = 0; i< nums.length; i++) {
      if(nums[i] === target) {
          return i
      } else if(num[i] > target) {
        return i
      }  
      if(nums.length === (i+1)) {
          while(nums[i] > target){
            nums[i-1]
            i--
          } 
          return i+=1
      } 
  }
};

searchInsert([1,3,4,5,6], 2)