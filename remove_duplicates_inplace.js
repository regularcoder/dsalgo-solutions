// Given an array of sorted numbers, separate all duplicates from it in-place. You should not use any extra space; move all duplicates at the end of the array and after moving return the length of the subarray that has no duplicate in it.

const remove_duplicates = function(arr) {
  let start = 0;
  let runner = 0;

  while(runner < arr.length) {
    if(arr[start] === arr[runner]) {
      // keep running, numbers are same
      runner++;
    } else {
      // swap after moving start
      start++;

      arr[start] = arr[runner];
    }
  }

  // start is on second to last element
  return start + 1;
};

remove_duplicates([2,3,3,3,6,9,9]);
