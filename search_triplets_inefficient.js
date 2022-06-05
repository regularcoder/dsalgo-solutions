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

const search_triplets = function(arr) {
  triplets = [];
  let len = arr.length;

  let hash_map = {};

  // build hash map for quick lookup
  for(let i = 0; i < len; i++) {
    const elem = arr[i];

    if(elem in hash_map) {
      hash_map[elem]++;
    } else {
      hash_map[elem] = 1;
    }
  }

  const trio_map = {};

  // start from a number and search rest of array (round robin)
  for(let start = 0; start < len; start++) {
    let start_elem = arr[start];
    let sum_needed = -start_elem;

    let pointer = (start + 1) % len;
    let run_counter = 0;

    // temporarily remove potential first element from hashmap
    hash_map[start_elem]--;

    // run round every element and see if it has matching pair
    while(run_counter < len - 1) {
      let pointer_elem = arr[pointer];
      let element_needed = sum_needed - pointer_elem;

      // temporarily remove potential second element from hashmap
      hash_map[pointer_elem]--;

      if(element_needed in hash_map && hash_map[element_needed] > 0) {
        // found the trio we need
        const trio = [start_elem, pointer_elem, element_needed];
        
        // sort the trio
        const sorted_trio = trio.sort((a, b) => a - b);

        if(!(sorted_trio in trio_map)) {
          triplets.push(trio);
          trio_map[sorted_trio] = 1;
        }

        // add back second element into hashmap
        hash_map[pointer_elem]++;
        break;
      }

      // add back potential second element into hashmap
      hash_map[pointer_elem]++;

      pointer = (pointer + 1) % len;
      run_counter++;
    }

    // put potential first element back into hashmap
    hash_map[start_elem]++;
  }

  return triplets;
};

console.log("START");
search_triplets([-5,2,-1,-2,3]);
console.log("END");
