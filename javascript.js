// Rock paper scissors:
// 1 show a welcome message explaining to the user the game
// 2 take input for r/p/s
// 3 generate computer pick and return it to console - random number, if <0.33 rock, 0.33<>0.66 paper, 0.66< scissors
// evaluate who wins, update score
// requires input, computer pick func, evaluate func, update score, maybe play to 3 wins so loop


let wannaKeepPlaying = true
let scoreMax = 0
let computerScore = 0
let userScore = 0

alert("Welcome to the game of rock paper scissors. To begin, pick rock paper, or scissors. You'll play against a computer. Trzy po trzy!")

while (wannaKeepPlaying) {
    while (scoreMax < 5) {
        let input = prompt("Pick rock paper, or scissors." )
        
        let computerPick1 = computerPicker()

        userPicker(input)

        console.log('the computer has chosen ' + computerPick1)
        rpsEvaluator(input, computerPick1)
        updateScore()
        console.log("The score: human:" + userScore + ", computer: " + computerScore)
    }
    if (computerScore == 5) {
        alert("The computer has won the game!")
    } else {
        alert("You have won the game!")
    }
    wantMore = confirm('wanna keep playing?')
    if (wantMore) {
        computerScore = 0
        userScore = 0
        updateScore()
        wannaKeepPlaying = true
    } else {
        wannaKeepPlaying = false
    }
}


function computerPicker() {
    let random = Math.random()
    if (random < 0.33) {
        return 'rock'
    } else if (random < 0.66) {
        return 'paper'
    } else {
        return 'scissors'
    }
};

function userPicker(response) {
    while (!['rock', 'paper', 'scissors'].includes(response.toLowerCase())) {
        console.log('you can only pick rock, paper, or scissors')
        response = prompt("Please pick rock paper, or scissors." )
    }
    console.log("you've chosen " + response)
    return response
    };

function rpsEvaluator(humanPick, npcPick) {
    if (humanPick == 'rock') {
        if (npcPick == 'paper') {
            computerScore++
            console.log('paper wraps rock. point to the machine')
        } else if (npcPick == 'scissors') {
            userScore++
            console.log('rock blunts scissors. point to the fleshbag')
        } else {
            console.log("it's a tie")
        }
    } else if (humanPick == 'paper') {
        if (npcPick == 'rock') {
            userScore++
            console.log('paper wraps rock. points to the hooman')
        } else if (npcPick == 'scissors') {
            computerScore++
            console.log("scissors cut paper. point to the AI overlord")
        } else {
            console.log("it's a tie")
        }
    } else if (humanPick == 'scissors') {
        if (npcPick == 'rock') {
            computerScore++
            console.log('rock blunts scissors. NPC scores!')
        } else if (npcPick == 'paper') {
            userScore++
            console.log("scissors cut paper. point to humanity")
        } else {
            console.log("it's a tie")
        }
    }
};

function updateScore() {
    if (userScore > computerScore) {
        scoreMax = userScore
    } else {
        scoreMax = computerScore
    }
}