/* 
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

Example 2:
Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]
*/

const make_squares = function(arr) {
  // stuff array so that we can address it from highest
  squares = Array(arr.length).fill(0);
  
  let start = 0;
  let end = arr.length - 1;
  let highest_index = arr.length - 1;

  while(start <= end) {
    const start_value = arr[start] * arr[start];
    const end_value = arr[end] * arr[end];

    // look for largest value from beginning or start
    if(start_value > end_value) {
      squares[highest_index] = start_value;
      start++;
    } else {
      squares[highest_index] = end_value;
      end--;
    }

    highest_index--;
  }

  return squares;
};
