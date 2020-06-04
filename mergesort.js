const mergesort  = (arr) => {
  if (arr.length > 1)  {
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
     return merge(mergesort(left), mergesort(right))
cd   } else {
    return arr
  }
}

const merge  =(left, right) => {
  // console.log(left, right)
  let result = [], leftIndex =0, rightIndex = 0

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      rightIndex ++
    } else {
      result.push(right[rightIndex])
      leftIndex ++
      
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

mergesort([2,3,9,4,5,8,6,7])