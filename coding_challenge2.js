//SCENARIO 1

// weight in kg; height in meter; 

let markWeight1 = 78;
let markHeight1 = 1.69;

let johnWeight1 = 92;
let johnHeight1 = 1.95;

let calcMarkBMI1 = markWeight1 / markHeight1 ** 2;
let calcJohnBMI1 = johnWeight1 / johnHeight1 ** 2;

let markHigherBMI1 = calcMarkBMI1 > calcJohnBMI1;
console.log(calcMarkBMI1, calcJohnBMI1, markHigherBMI1); // returns 27.3 for Mark & 24.2 for John & true

//SCENARIO 2

let markWeight2 = 95;
let markHeight2 = 1.88;

let johnWeight2 = 85;
let johnHeight2 = 1.76;

let calcMarkBMI2 = markWeight2 / markHeight2 ** 2;
let calcJohnBMI2 = johnWeight2 / johnHeight2 ** 2;

let markHigherBMI2 = calcMarkBMI2 > calcJohnBMI2;
console.log(calcMarkBMI2, calcJohnBMI2, markHigherBMI2); // returns 26.9 for Mark & 27.4 for John & false


// OUTPUT FOR SCENARIO 1
if (markHigherBMI1) {
    console.log(`Mark's BMI (${calcMarkBMI1}) is higher than John's (${calcJohnBMI1})!`);
} else {
    console.log(`Mark's BMI (${calcMarkBMI1}) is lower than John's (${calcJohnBMI1})!`)
}

// OUTPUT FOR SCENARIO 2
if (markHigherBMI2) {
    console.log(`Mark's BMI (${calcMarkBMI2}) is higher than John's (${calcJohnBMI2})!`);
} else {
    console.log(`Mark's BMI (${calcMarkBMI2}) is lower than John's (${calcJohnBMI2})!`)
}