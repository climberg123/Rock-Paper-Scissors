// Generate random move for computer
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Get player's chosen move, convert to number for future comparison
function getHumanChoice(userInput) {
    switch (userInput) {
        case "rock":
            userInput = 0;
            break;
        case "paper":
            userInput = 1;
            break;
        case "scissors":
            userInput = 2;
            break;
        default:
            userInput = getHumanChoice(prompt("Please type rock, paper, or scissors.").toLowerCase());
    }

    return userInput;
}

// Keep track of the score for user and computer
let humanScore = 0;
let computerScore = 0;

const winConditions = {
    0: 2, 
    1: 0, 
    2: 1
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

console.log(playRound(1, 100));
