var climbStairs = function(n) {   
  let getcount = (stairsremaining,  savedresult) => {  // create a recursive fucntion
    if(stairsremaining < 0) {
      return 0
    }
    if(stairsremaining === 0) {
      return 1
    }
    if(savedresult[stairsremaining]) {  // if we have stairs remaining in the savedresult object , return what is in the object 
      return savedresult[stairsremaining]
    }
    savedresult[stairsremaining] = getcount(stairsremaining-1 , savedresult) +
    getcount(stairsremaining-2 , savedresult)  // add what is in the left and right
    return savedresult[stairsremaining]
  }  
  return getcount(n, {})
};

climbStairs(5)