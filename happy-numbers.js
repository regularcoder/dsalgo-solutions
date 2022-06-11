/*
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
*/

const find_square_digits = function(num) {
  let sum = 0;
  let remainder = num;

  while(remainder > 0) {
    const digit = remainder % 10;
    remainder = Math.trunc(remainder / 10);

    sum += digit * digit;
  }

  return sum;
}

const find_happy_number = function(num) {
  let slow = num;
  let fast = find_square_digits(num);

  while(true) {
    // repetition, either of 1 or a number in loop
    if(slow === fast) {
      break;
    }

    slow = find_square_digits(slow);
    fast = find_square_digits(find_square_digits(fast));
  }

  return slow === 1;
};


console.log(`${find_happy_number(23)}`) //true
console.log(`${find_happy_number(12)}`) //false
