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

const multiply = function (a) {
  const newArray = [];
  let answer = 0;
  for (i = 0; i < a.length; i++) {
    newArray.push(a[i]);
    console.log(newArray);
  }
  answer = newArray.reduce((acc, curr) => acc * curr, 1);
  return answer;
};

// const Array = arguments.reduce((acc, curr) => acc * curr, 1);
// console.log(Array);
// return Array;
const power = function (a, b) {
  exp = a ** b;
  return exp;
};

const factorial = function (a) {
  const Array = [];
  for (i = a; i > 0; i--) {
    Array.push(a);
    a--;
  }
  const newArray = Array.reduce((acc, curr) => acc * curr, 1);
  return newArray;
};

function spreed(a) {
  console.log(a);
  let array = a;
  array = array.reduce((acc, curr) => acc * curr, 1);
  console.log(array);
}
spreed([2, 4, 6, 8, 10, 12, 14], [2, 5]);
spreed([2, 5]);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
