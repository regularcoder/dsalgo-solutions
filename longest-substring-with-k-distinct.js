// Given a string, find the length of the longest substring in it with no more than K distinct characters.

const longest_substring_with_k_distinct = function(str, k) {
  const char_map = {};
  let char_count = 0;

  let running_length = 0;
  let longest_length = 0;
  let window_start = 0;
  
  for(let i = 0; i < str.length; i++) {
    const curr_char = str[i];

    // consume character
    running_length++;
    if(curr_char in char_map) {
      char_map[curr_char]++;
    } else {
      char_map[curr_char] = 1;
      char_count++;
    }

    // if we exceed distinct character limit then shrink from left until count goes down
    while(char_count > k && window_start < i) {
      const left_window_char = str[window_start];
      
      char_map[left_window_char]--;

      // only reduce char_count if no more instances in window
      if(char_map[left_window_char] === 0) {
        delete char_map[left_window_char];
        char_count--;
      }

      // length reduces because window is shrinking
      running_length--;
      window_start++;
    }

    if(running_length > longest_length) {
      longest_length = running_length;
    }
  }

  return longest_length;
};

longest_substring_with_k_distinct(`cbbebi`, 3);
