// Set initial variables
let scoreMax = 0
let computerScore = 0
let userScore = 0
let choice = ""
const welcome = document.querySelector(".welcome")
const buttons = document.querySelectorAll('button')

welcome.textContent = "Welcome to the game of rock paper scissors. To begin, pick rock paper, or scissors. You'll play against a computer. Trzy po trzy!"


buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (scoreMax < 5) {
        // Game logic when scoreMax is less than 5
        choice = button.textContent;
        let computerPick1 = computerPicker();
  
        // Update the DOM with player and computer choices
        document.querySelector(".hPick").textContent = `You chose ${choice}`;
        document.querySelector(".cPick").textContent = `The computer chose ${computerPick1}`;
  
        // Evaluate the round and update scores
        rpsEvaluator(choice, computerPick1);
        updateScore();
  
        // Display updated scores
        document.querySelector(".hScore").textContent = `Human has ${userScore} points!`;
        document.querySelector(".cScore").textContent = `Computer has ${computerScore} points! scoremax= ${scoreMax}`;
      }
  
      // Check for game over after updating the scores
      if (scoreMax >= 5) {
        if (computerScore === 5) {
          alert("The computer has won the game!");
        } else {
          alert("You have won the game!");
        }
  
        // Add replay functionality
        document.querySelector("h2").textContent = "Want to keep playing?";
        let playOnBtn = document.createElement("button");
        playOnBtn.textContent = "Another round!";
        document.querySelector("h2").appendChild(playOnBtn);
  
        playOnBtn.addEventListener("click", () => {
          // Reset scores and update DOM
          computerScore = 0;
          userScore = 0;
          scoreMax = 0;
          updateScore();
          document.querySelector(".hScore").textContent = "Human has 0 points!";
          document.querySelector(".cScore").textContent = "Computer has 0 points!";
          document.querySelector("h2").textContent = "Scores:";
        });
      }
    });
  });
  


// Get a random choice from the computer
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

//Evaluate choice pairs and update scores
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

// Get the current highest score to track when someone reaches 5
function updateScore() {
    if (userScore > computerScore) {
        scoreMax = userScore
    } else {
        scoreMax = computerScore
    }
}
