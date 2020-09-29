// Exercise 6
//
// Part 1 - Write
// ---------------
// Write a function that
// - accepts an array. √
// - The array has 3 elements. (position 0 , 1, 2) √
// - If the two values are not numbers, return undefined  (Check the position 1, 2) √
// - The first element of the array is a string that represents an operation. (Check the position zero if it's add sub mul div) √
// - If the operation is
//      - "add", return the sum of the two other elements of the array.(Element at pos 1 + element at pos 2) √
//      - "sub", return their difference. √
//      - "mul", return their product. √
//      - "div", return the quotient of the two numbers. √
//      - Anything else return undefined. √

// For example:
// calculator(["add", 10, 20]); // 30

function calculator(arr) {
  if (
    typeof arr[0] !== "string" &&
    typeof arr[1] !== "number" &&
    typeof arr[2] !== "number"
  ) {
    return undefined;
  }
  switch (arr[0]) {
    case "add":
      return arr[1] + arr[2];
    case "sub":
      return arr[1] - arr[2];
    case "mul":
      return arr[1] * arr[2];
    case "div":
      return arr[1] / arr[2];
    default:
      return undefined;
  }

  // if (
  //   typeof arr[0] !== "string" &&
  //   typeof arr[1] !== "number" &&
  //   typeof arr[2] !== "number"
  // ) {
  //   return undefined;
  // } else if (arr[0] === "add") {
  //   return arr[1] + arr[2];
  // } else if (arr[0] === "sub") {
  //   return arr[1] - arr[2];
  // } else if (arr[0] === "mul") {
  //   return arr[1] * arr[2];
  // } else if (arr[0] === "div") {
  //   return arr[1] / arr[2];
  // } else {
  //   return undefined;
  // }
}
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = calculator;
