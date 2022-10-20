function palindromes(word) {
  let arr = [];
  let revArr = [];

  let string;
  let revString;
  //make word in to an array-like object. create a copy and reverse it
  arr = [...word];
  revArr = [...arr].reverse();
  //join array in to string, remove punctuation and spaces
  string = arr
    .join("")
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "");

  revString = revArr
    .join("")
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "");
  //compare the two strings for equality
  if (string === revString) {
    return true;
  } else return false;
}

palindromes("tacos");
// console.log(palindromes("racecar"));
// console.log(palindromes("tacos"));
// pally("racecar");
// palindromes("racecar");
// Do not edit below this line
module.exports = palindromes;
