const findTheOldest = function (people) {
  //find the oldest
  //.sort()
  const arr = people.map(())
  const yearNow = new Date().getFullYear();
  if (people.hasOwnProperty.yearOfDeath === false) {
    people.yearOfDeath.push(yearNow);
  }

  console.log(yearNow);
  const oldest = people.sort(function (a, b) {
    const person1 = a.yearOfDeath - a.yearOfBirth;
    const person2 = b.yearOfDeath - a.yearOfBirth;
    return person1 > person2 ? -1 : 1;
  });
  console.log(oldest);
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
  { name: "dog", yearOfBirth: 1990 },
];

findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
