const fibonacci = function (num) {
  let isNumber = 0;
  if (num < 0) {
    return "OOPS";
  } else {
    let arr = [];
    let a, b, result;
    a = 0;
    b = 1;
    result = b;
    for (i = 1; i < num; i++) {
      result = a + b;
      a = b;
      b = result;
    }
    console.log(result);
    return result;
  }
};

fibonacci(4);
fibonacci(6);
// Do not edit below this line
module.exports = fibonacci;
