

const calcAverage = (firstScore, secondScore, thirdScore) => {
    return (firstScore + secondScore + thirdScore) / 3;
}

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

function checkWinner(teamScore1, teamScore2) {

    if (teamScore1 >= 2 * teamScore2) {
        console.log(`Koalas win( ${teamScore1} vs. ${teamScore2}.)`);
    } else if ((teamScore2 >= 2 * teamScore1)) {
        console.log(`Koalas win( ${teamScore2} vs. ${teamScore1}.)`);
    } else {
        console.log(`None of the teams win...`);
    }
}

checkWinner(avgKoalas, avgDolphins);

checkWinner(500, 250);
