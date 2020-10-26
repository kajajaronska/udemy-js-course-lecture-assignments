// JS FUNDAMENTALS - PART 1 - CODING CHALLENGE 4

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.20);

console.log(`Steven's bill came to ${bill}. He left the tip of ${tip}, so the total paid was ${bill + tip}`);

