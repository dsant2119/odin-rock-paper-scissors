let humanScore = 0;
let computerScore = 0;
let numRounds = 0;
let roundArray = [];

let getComputerChoice = () => {
    let num = Math.floor(Math.random() * 100 + 1);
    if (num >= 0 && num <= 33) return "rock";
    else if (num > 33 && num <= 66) return "paper";
    else return "scissors";
}

let playRound = (humanChoice, computerChoice) => {
    numRounds++;
    const rounds = document.querySelector("#round");
    let child = rounds.firstElementChild;
    child.textContent = `Rounds Played: ${numRounds}`;

    const humanChoiceLower = humanChoice.toLowerCase();
    let gameTie = false;
    let gameWin = false;

    if (humanChoiceLower === computerChoice) gameTie = true;
    else if (computerChoice === "rock") {
        if (humanChoiceLower === "paper") humanScore++;
        else computerScore++;
    }
    else if (computerChoice === "paper") {
        if (humanChoiceLower === "scissors") humanScore++;
        else computerScore++;
    }
    else {
        if (humanChoiceLower === "rock") humanScore++;
        else computerScore++;
    }

    if (numRounds == 5) {
        if (humanScore > computerScore) gameWin = true;
        else if (humanScore === computerScore) gameTie = true;
        else gameWin = false;

        const body = document.querySelector("body");
        let child = body.lastElementChild; //get last child in list
        while (child) {
            body.removeChild(child);   //remove currently selected child
            child = body.lastElementChild; //update child
        }
        const content = document.createElement("h1");
        if (gameWin) content.textContent = `YOU WIN!! Page will refresh in 3 seconds`;
        else if (gameTie) content.textContent = "TIE GAME!! Page will refresh in 3 seconds";
        else content.textContent = `YOU LOSE!! Page will refresh in 3 seconds.`;
        body.appendChild(content);

        const gameRecord = document.createElement("div");
        gameRecord.classList.add("record");
        gameRecord.textContent = roundArray.join("\n");
        body.appendChild(gameRecord);

        // setTimeout(function () {
        //     location.reload();
        // }, 3000); // Time in milliseconds
    }
    else {

        const scorecard = document.querySelector("#scorecard");
        const content = document.createElement("h3");
        content.classList.add("score");
        if (gameTie) content.textContent =
            `Computer chose ${computerChoice} against your ${humanChoice}! It's a TIE!
        Current score is Human: ${humanScore} to Computer: ${computerScore}`;
        else content.textContent =
            `Computer chose ${computerChoice} against your ${humanChoice}!
        Current score is Human: ${humanScore} to Computer: ${computerScore}`;
        scorecard.appendChild(content);
        roundArray.push(content.textContent);
    }
}

let playGame = () => {
    const roundCounter = document.querySelector("#round");
    const roundContent = document.createElement("h3");
    roundCounter.classList.add("roundCtr");
    roundContent.textContent = `Rounds Played: ${numRounds}`;
    roundCounter.appendChild(roundContent);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.id, getComputerChoice());
        });
    });
}

playGame();

