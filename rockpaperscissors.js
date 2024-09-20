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

function playGame() {
    // Keep track of the score for user and computer
    let humanScore = 0;
    let computerScore = 0;

    // Rounds played counter
    let roundsPlayed = 0;

    const winConditions = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    };

    // Plays single rounds of the game
    function playRound(humanChoice, computerChoice) {
        console.log(`You: ${humanChoice} vs Computer: ${computerChoice}`);
        if (humanChoice === computerChoice) {
            console.log("You tied!");
        } else if (winConditions[humanChoice] === computerChoice) {
            console.log("You win!");
            humanScore++;
        } else {
            console.log("You lose!");
            computerScore++;
        }
    }

    while (roundsPlayed < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        roundsPlayed++;
    }

    console.log(`${(humanScore > computerScore) ? "You have" :
        (humanScore < computerScore) ? "The computer has" :
        "You both tied, and neither has"
    } won. In ${roundsPlayed} played, you won ${humanScore} times, and the computer has won ${computerScore} times.`);
}

playGame();
