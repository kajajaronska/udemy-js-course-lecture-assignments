// JS FUNDAMENTALS - PART 1 - CODING CHALLENGE 3

const dolphinsGame1 = 96;
const dolphinsGame2 = 108;
const dolphinsGame3 = 89;

let dolphinsCalcAverage = (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) / 3;

const koalasGame1 = 88;
const koalasGame2 = 91;
const koalasGame3 = 110;

let koalasCalcAverage = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

console.log(dolphinsCalcAverage, koalasCalcAverage);

// Comparing teams average scores 

// if (dolphinsCalcAverage > koalasCalcAverage) {
//     console.log(`Dolphins win with an average score of ${dolphinsCalcAverage}!`);
// } else if (dolphinsCalcAverage === koalasCalcAverage) {
//     console.log(`It's a draw! Both teams scored the same average of ${dolphinsCalcAverage}`);
// } else {
//     console.log(`Koalas win with an average score of ${koalasCalcAverage}!`);
// }

// Adding a requirement of a minimum 100 points to win a trophy

if (dolphinsCalcAverage > koalasCalcAverage && dolphinsCalcAverage >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsCalcAverage}!`);
} else if (koalasCalcAverage > dolphinsCalcAverage && koalasCalcAverage >= 100) {
    console.log(`Koalas win with an average score of ${koalasCalcAverage}!`);
} else if (koalasCalcAverage >= 100 && dolphinsCalcAverage >= 100) {
    console.log(`It's a draw! Both teams scored the same average of ${dolphinsCalcAverage}`);
} else {
    console.log(`Teams scored less than 100 points. No winner!`);
}