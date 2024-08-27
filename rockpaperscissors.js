// console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let num = Math.floor(Math.random() * 100 + 1);
    // console.log(num)
    if (num >= 0 && num <= 33) return "rock";
    else if (num > 33 && num <= 66) return "paper";
    else return "scissors";
}

let getHumanChoice = () => {
    const choice = prompt("Type Rock, Paper, or Scissors (case-sensitive)");
    return choice;
}

let playRound = (humanChoice, computerChoice) => {
    const humanChoiceLower = humanChoice.toLowerCase();
    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

