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


// Coding assignment 5 - Template literals

let myCountry = 'Poland';
let continent = 'Europe';
let myCountryLanguage = 'Polish';
let myCountryPopulation = 40;

let description = `${myCountry} is in ${continent}, and its ${myCountryPopulation} million people speak ${myCountryLanguage}.`

console.log(description);


// Coding assignment 6 - Taking decisions: if/else statements


let averagePopulation = 33;

if (myCountryPopulation > averagePopulation) {
    console.log(`${myCountry}'s population is above average.`)
} else {
    console.log(`${myCountry}'s population is ${averagePopulation - myCountryPopulation} million below average.`)
}


// Coding assignment 7 - Type conversion and Coercion

console.log('9' + '5'); // returns '95'
console.log('19' - '13' + '17') // returns '617'
console.log('19' - '13' + 17); // returns 23;
console.log('123' < 57); // returns false;
console.log(5 + 6 + '4' + 9 - 4 - 2); // returns 1143;


// Coding assignment 8 - Equality operators == vs. ===

let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border!');
} else {
    console.log('No borders!');
}


// Coding assignment 9 - Logical operators

const myCountry = 'Poland';
const continent = 'Europe';
const myCountryLanguage = 'Polish';
let myCountryPopulation = 40;

const isIsland = false;

if (myCountryLanguage === 'English' && myCountryPopulation < 50 && !isIsland) {
    console.log('You should live in Poland');
} else {
    console.log("Poland doesn't meet your criteria :(");
}



// Coding assignment 10 - The switch statement

const language = 'mandarin';


switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too!');
}



// Coding assignment 11 - The conditional (ternary) operator

const myCountry = 'Poland';
const continent = 'Europe';
const myCountryLanguage = 'Polish';
let myCountryPopulation = 40;

myCountryPopulation > 33 ? console.log(`${myCountry}'s population is above average`) :
    console.log(`${myCountry}'s population is below average`);



// JAVASCRIPT FUNDAMENTALS - PART 2

// Coding assignment 1 - Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const poland = describeCountry('Poland', 40, 'Warsaw');
const seychelles = describeCountry('Seychelles', 0.096, 'Victoria');
const russia = describeCountry('Russia', 144.5, 'Moscow');

console.log(poland);
console.log(russia);
console.log(seychelles);



// Coding assignment 2 - Function Declarations vs. Expressions

// Function Declaration

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const populationPolandVSworld1 = percentageOfWorld1(37.9);
const populationFinlandVSworld1 = percentageOfWorld1(5.5);
const populationUnitedStatesVSworld1 = percentageOfWorld1(328.2);
console.log(populationPolandVSworld1, populationFinlandVSworld1, populationUnitedStatesVSworld1);

// Function Expression

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const populationPolandVSworld2 = percentageOfWorld2(37.9)
const populationFinlandVSworld2 = percentageOfWorld2(5.5);
const populationUnitedStatesVSworld2 = percentageOfWorld2(328.2);

console.log(populationPolandVSworld2, populationFinlandVSworld2, populationUnitedStatesVSworld2);


// Coding assignment 3 - Arrow functions

const percentageOfWorld3 = population => population / 7900 * 100;

const populationGermanyVSworld = percentageOfWorld3(83);

console.log(populationGermanyVSworld);



// Coding assignment 4 - Functions calling other functions

const percentageOfWorld1 = (population) => population / 7900 * 100;

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

console.log(describePopulation('Poland', 38));
console.log(describePopulation('Finland', 5.5));
console.log(describePopulation('Germany', 83));


// Coding assignment 5 - Introduction to arrays

const percentageOfWorld1 = (population) => population / 7900 * 100;
const populations = [38, 5.5, 83, 112];

console.log(populations.length === 4);

const percentages = [];
percentages[0] = percentageOfWorld1(populations[0]);
percentages[1] = percentageOfWorld1(populations[1]);
percentages[2] = percentageOfWorld1(populations[2]);
percentages[3] = percentageOfWorld1(populations[3]);

console.log(percentages);

// Coding assignment 6 - Basic array operators

const neighboursOfPoland = ['Germany', 'Russia', 'Lithuania', "Belarus", 'Ukraine', 'Slovakia', 'Czech Republic'];

neighboursOfPoland.push('Utopia'); // Adding element in the end of the array
neighboursOfPoland.pop();

neighboursOfPoland.includes('Germany') ? console.log("Central european country!") : console.log("Probably not a central European country!");

neighboursOfPoland[neighboursOfPoland.indexOf('Ukraine')] = 'Sweden';

console.log(neighboursOfPoland);
*/


// Coding assignment 7 - Introduction to objects

const myCountry = {
    country: 'Poland',
    capital: 'Warsaw',
    language: 'Polish',
    population: 33,
    neighbours: ['Germany', 'Russia', 'Lithuania', "Belarus", 'Ukraine', 'Slovakia', 'Czech Republic']
};

// Coding assignment 8 - Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbours and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);












