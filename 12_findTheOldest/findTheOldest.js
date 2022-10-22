const findTheOldest = function (people) {
  //loop through objects and add year of death as current year if not present
  for (i = 0; i < people.length; i++) {
    if (!people[i].yearOfDeath) {
      people[i].yearOfDeath = new Date().getFullYear();
    }
  }
  people.sort(
    (a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
  );
  console.log(people[0]);
  return people[0];

};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    yearsLived: 1970 - 1942,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    yearsLives: 2011 - 1962,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    yearsLived: 1941 - 1912,
  },
  { name: "dog", yearOfBirth: 1990, yearsLived: 2022 - 1990 },
  { name: "cat", yearOfBirth: 2007, yearsLived: 2022 - 2007 },
];

findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
