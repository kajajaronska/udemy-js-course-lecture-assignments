// CODING CHALLENGE 4 / JS FUNDAMENTALS PART 2 - FOR & WHILE LOOPS

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    if (bill >= 50 && bill < 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

for (let i = 0; i < bills.length; i++) {
    calcTip(bills[i]);
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips, totals);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    console.log(sum / arr.length);
};

calcAverage(totals);




