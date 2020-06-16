
var merge = function(nums1, m, nums2, n) {
    let firstNum = m-1
    let SecondNum = n-1

    for (let i = m+n-1; i>=0; i--) {
      if(SecondNum < 0) {
        break;
      }
      if(nums1[firstNum] > nums2[SecondNum]) {
        nums1[i] = nums1[firstNum] 
        firstNum --
      } else {
        nums1[i] = nums2[SecondNum]
        second --
      }
    }
};

