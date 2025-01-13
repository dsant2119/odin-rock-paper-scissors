let humanScore = 0;
let computerScore = 0;
let numRounds = 0;

let getComputerChoice = () => {
    let num = Math.floor(Math.random() * 100 + 1);
    if (num >= 0 && num <= 33) return "rock";
    else if (num > 33 && num <= 66) return "paper";
    else return "scissors";
}

let getHumanChoice = () => {
    const choice = prompt("Type Rock, Paper, or Scissors (case-sensitive)");
    return choice;
}

let playRound = (humanChoice, computerChoice) => {
    numRounds++;
    const humanChoiceLower = humanChoice.toLowerCase();
    console.log(`Player's Choice: ${humanChoiceLower.toUpperCase()} Computer's Choice: ${computerChoice.toUpperCase()}`);

    if (humanChoiceLower === computerChoice) console.log("Tie game! Score remains unchanged!");
    else if (computerChoice === "rock") {
        if (humanChoiceLower === "paper") {
            console.log(`You win! ${humanChoiceLower} beats ${computerChoice}!`);
            humanScore++;
        }
        else /*if (humanChoiceLower === "scissors")*/ {
            console.log(`You lose! ${computerChoice} beats ${humanChoiceLower}!`);
            computerScore++;
        }
    }
    else if (computerChoice === "paper") {
        if (humanChoiceLower === "scissors") {
            console.log(`You win! ${humanChoiceLower} beats ${computerChoice}!`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoiceLower}!`);
            computerScore++;
        }
    }
    else {
        if (humanChoiceLower === "rock") {
            console.log(`You win! ${humanChoiceLower} beats ${computerChoice}!`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoiceLower}!`);
            computerScore++;
        }
    }
}

let playGame = () => {

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.id, getComputerChoice());
        });
    });
    
    console.log(`Current score is Human: ${humanScore} to Computer: ${computerScore}`);

    if (numRounds > 0) {
        if (humanScore === computerScore) console.log(`After ${numRounds} rounds, the game is tied!`);
        else if (humanScore > computerScore) console.log(`After ${numRounds}, the HUMAN wins!`);
        else console.log(`After ${numRounds}, the COMPUTER wins!`);
    }
    else
        console.log("NO ROUNDS HAVE BEEN PLAYED!")
}

playGame();

