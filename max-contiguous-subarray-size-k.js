// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const max_sub_array_of_size_k = function(k, arr) {
  
  let maxSum = 0;
  let runningSum = 0;
  for(let i = 0; i < arr.length; i++) {
    // add to window
    runningSum += arr[i];

    if(i >= k) {
      // remove from window
      runningSum -= arr[i - k];
    }

    if(runningSum > maxSum) {
      maxSum = runningSum;
    }
  }
  return maxSum;
};


console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);
