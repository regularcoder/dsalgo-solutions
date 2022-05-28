// Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

const smallest_subarray_sum = function(s, arr) {
  let smallest_length = Infinity;
  let current_sum = 0;
  let current_length = 0;
  let window_start = 0;

  for(let i = 0; i < arr.length; i++) {
    // always move window forwards
    current_sum += arr[i];
    current_length++;

    // try and decrease window
    while(current_sum - arr[window_start] >= s) {
      current_sum -= arr[window_start];
      window_start++;
      current_length--;
    }

    // if we reached target size then capture length
    if(current_sum >= s && current_length < smallest_length) {
      smallest_length = current_length;
    }
  }

  if(smallest_length === Infinity) {
    return 0;
  }
  return smallest_length;
};

smallest_subarray_sum(7, [2,1,5,2,3,2]);
