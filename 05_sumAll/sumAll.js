// //version 1
// const sumAll = function(a,b) {
//     //create empty array
// const array = [];
// // fill array of numbers between a and b
// for (let i = a; i<=b; i++){
//     //push iteration in to array
//    array.push(i)
//    //when iteration reaches end point, sum
//    if (i === b) {

//     return sumArr= array.reduce((acc,curr)=> acc + curr, 0)

// }
// }
// };

const sumAll = (min, max) => {
  let sum = 0;
  let arr = [];
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }
  if (min < 0 || max < 0) {
    return "ERROR";
  }
  if (min > max) {
    //use swap variable to switch min and max values
    swap = max;
    max = min;
    min = swap;
  }
  //loop to push each number in to array
  for (i = min; i <= max; i++) {
    arr.push(i);
  }
  //sum of the array elements by using reduce method
  sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
};
console.log(sumAll(4, 1));

console.log(sumAll(1, 30));
console.log(sumAll(-1, -2));

// Do not edit below this line
module.exports = sumAll;
