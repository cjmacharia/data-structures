// [3,-2,1,-3,0,8,4,-2,4,5,6]


// [-2,1,-3,4,-1,2,1,-5,4]

 
//  global position= 6
// current = 6
// total = 
// new total = 1


const contigous = (arr) => {
  let maxCurrentTotal = arr[0]
  let highestglobal = arr[0]
  for(let i =1; i< arr.length; i++) {
      if(arr[i] >= arr[i]+maxCurrentTotal) {
        maxCurrentTotal = arr[i]
      } else {
        maxCurrentTotal += arr[i] 
      }
      if(maxCurrentTotal > highestglobal ) {
        highestglobal = maxCurrentTotal
    
  } 
}
return highestglobal
}

contigous([-2,1,-3,4,-1,2,1,-5,4])