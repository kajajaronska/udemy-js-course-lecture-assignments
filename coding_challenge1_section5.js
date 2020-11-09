// Coding challenge 1 - Developer skills

// 1. Understanding the problem
// - To obtain printed output we have to loop through elements in array
// - For each element we can return a string with a temperature and a day number
// - To obtain final string we will have to join all strings

//  2. Breaking the problem into sub-problems
// - for loop looping through each element in the array
// - string as an output after each iteration including temperature and a day (index - 1)
// - how to join all output to print the final string?

// TEST DATA 1: [17, 21, 23];

const printForecast = function (arr) {
  let finalForecast = '';
  for (let i = 0; i < arr.length; i++) {
    finalForecast += `...${arr[i]}°C in ${i + 1} days `;
  }
  return finalForecast + '...';
};

console.log(printForecast([12, 5, -5, 0, 4]));
