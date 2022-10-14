const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (x) {
  const arr = x;
  x = arr.reduce((acc, curr) => acc + curr, 0);
  return x;
};

const multiply = function (...args) {
  const arr = args;
  console.log("this is args" + args);
  console.log(arr.length);
  arrLength = arr.length;
  console.log(arrLength);
  testVar = 0;
  for (i = 0; i <= arrLength; i++) {
    testVar++;
  }
  console.log(testVar);
};

const power = function (a, b) {
  exp = a ** b;
  return exp;
};

const factorial = function (a) {
 arr = [];
  
};
factorial(5);
multiply([5, 5, 6, 6, 6, 6]);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
