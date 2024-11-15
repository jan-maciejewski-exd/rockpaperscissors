// Rock paper scissors:
// 1 show a welcome message explaining to the user the game
// 2 take input for r/p/s
// 3 generate computer pick and return it to console - random number, if <0.33 rock, 0.33<>0.66 paper, 0.66< scissors
// evaluate who wins, update score
// requires input, computer pick func, evaluate func, update score, maybe play to 3 wins so loop

let input = prompt("Welcome to the game of rock paper scissors. To begin, pick rock paper, or scissors. You'll play against a computer. Trzy po trzy!" )
console.log(userPick(input))

console.log('the computer has chosen ' + computerPick())

function computerPick() {
    let thepick = Math.random()
    if (thepick < 0.33) {
        return 'rock'
    }
    else if (thepick > 0.66) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
};

function userPick(input) {
    if (['rock', 'paper', 'scissors'].includes(input)) {
        console.log("you've chosen " + input)
    }
    else {
        console.log('pick rock, paper, or scissors')
    }
};
