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


