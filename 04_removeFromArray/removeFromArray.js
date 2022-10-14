const removeFromArray = function(...args) {
    //pull first element of our array args[0]
    const array = args[0];
    //create a new array for the rest of the arguments
    const newArray = [];
    // use forEach to go through the array
  // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
  array.forEach((item)=> {
    if (!args.includes(item)) {
        newArray.push(item);
    }
  });

 


  // and return that array
return newArray

module.exports = removeFromArray;
