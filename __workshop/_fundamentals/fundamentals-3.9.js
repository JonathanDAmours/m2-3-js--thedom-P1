// Exercise 9
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string of multiple words and returns the longest word in the string.

// - If the input string is empty then return an empty string.
// - If multiple words have the same length, return the last one.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  // Place solution here
  let string = str.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i < string.length; i++) {
    if (longest < string[i].length) {
      longest = string[i].length;
      word = string[i];
    }
  }
  return word;
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = longestWord;
