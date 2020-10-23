// JAVASCRIPT FUNDAMENTALS - PART 1

//Coding assignment 1 - Values and variables
/*
// let country = 'Poland';
// let continent = 'Europe';
let population = 40;

// console.log(country);
// console.log(continent);
console.log(population);


// Coding assignment 2 - Data types

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
// console.log(typeof country);
console.log(typeof language);

// Coding assignment 3 - let, const and var

language = 'English';
const country = 'Poland';
const continent = 'Europe';

console.log(country);

// country = 'Austria'; // returns error - cannot reassign constant variable
console.log(country);

*/
// Coding assignment 4 - Basic operators

let myCountry = 'Poland';
let continent = 'Europe';
let myCountryLanguage = 'Polish';

let myCountryPopulation = 40;
let halfMyCountryPopulation = myCountryPopulation / 2;
console.log(halfMyCountryPopulation)

myCountryPopulation++;
console.log(myCountryPopulation);

let finlandPopulation = 6;
console.log(finlandPopulation > myCountryPopulation); // false - 41 is higher than 6; 

let averagePopulation = 33;
console.log(averagePopulation > myCountryPopulation); // false  - 41 is higher than 33; 

let description = myCountry + ' is in ' + continent + ', and its ' + myCountryPopulation + ' million people speak ' + myCountryLanguage + '.'

console.log(description);


