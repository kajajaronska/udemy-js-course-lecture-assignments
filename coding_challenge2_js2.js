// JS FUNDAMENTALS PART 2 / CODING CHALLENGE 2 - ARRAYS


const calcTip = function (bill) {
    if (bill >= 50 && bill < 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[02])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
