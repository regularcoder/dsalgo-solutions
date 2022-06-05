/*
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
*/

const search_triplets = function(unsorted_arr) {
  triplets = [];

  // sort the array to ease processing [-3, 0, 1, 2, -1, 1, -2] => [-3, -2, -1, 0, 1, 1, 2]
  const arr = unsorted_arr.sort((a, b) => a - b);
  
  for(let potential_first_idx = 0; potential_first_idx < arr.length - 1; potential_first_idx++) {
    const potential_first = arr[potential_first_idx];

    console.log(`Potential first is ${potential_first}`);

    // need this to get to 0
    const needed_sum_of_two = -potential_first;

    // now do a 2 sum on sorted array
    let left_idx = potential_first_idx + 1;
    let right_idx = arr.length - 1;

    while(left_idx < right_idx) {
      const left = arr[left_idx];
      const right = arr[right_idx];
      const current_sum = left + right;

      if(current_sum === needed_sum_of_two) {
        const trio = [potential_first, left, right];
        triplets.push(trio);

        // continue searching
        left_idx++;
        right_idx--;
      } else {
        if(current_sum > needed_sum_of_two) {
          // need smaller amount, so reduce right
          right_idx--;
        } else {
          // need bigger amount, so increase left
          left_idx++;
        }
      }
    }
  }

  return triplets;
};

search_triplets([-3,0,1,2,-1,1,-2]);
