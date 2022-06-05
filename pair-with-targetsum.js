// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

const pair_with_targetsum = function(arr, target_sum) {
  let start = 0;
  let end = arr.length - 1;

  while(start < end) {
    const current_sum = arr[start] + arr[end];

    if(current_sum === target_sum) {
      break;
    } else if(current_sum > target_sum) {
      // current sum is too big so we decrement end to get smaller sum
      end--;
    } else {
      // current sum is too small so we increment start to get bigger sum
      start++;
    }
  }

  return [start, end];
}

pair_with_targetsum([1,2,3,4,6], 6);
