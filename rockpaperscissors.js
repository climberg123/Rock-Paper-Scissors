// Generate random move for computer
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Get player's chosen move, convert to number for future comparison
function getHumanChoice() {
    let userInput = prompt("Enter your move:").toLowerCase();

    switch (userInput) {
        case "rock":
            break;
        case "paper":
            break;
        case "scissors":
            break;
        default:
            console.log("Please type rock, paper, or scissors:");
            userInput = getHumanChoice();
    }
    return userInput;
}

// Keep track of the score for user and computer
let humanScore = 0;
let computerScore = 0;

const winConditions = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("You tied!");
    } else if (winConditions[humanChoice] === computerChoice) {
        console.log("You win!");
        humanScore += 1;
    } else {
        console.log("You lose!");
        computerScore += 1;
    }
}

