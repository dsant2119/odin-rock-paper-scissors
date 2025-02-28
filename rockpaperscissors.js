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

    const scorecard = document.querySelector("#scorecard");
    const roundResult = document.createElement("div");
    roundResult.classList.add("record-entry");

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
    if (gameTie) {
        roundResult.textContent =
            `Computer chose ${computerChoice} against your ${humanChoice}! It's a TIE!
    Current score is Human: ${humanScore} to Computer: ${computerScore}`;
    }
    else {
        roundResult.textContent =
            `Computer chose ${computerChoice} against your ${humanChoice}!
        Current score is Human: ${humanScore} to Computer: ${computerScore}`;
    }
    scorecard.appendChild(roundResult);

    roundArray.push(roundResult.textContent);

    if (humanScore === 3 || computerScore === 3) {
        if (humanScore > computerScore) gameWin = true;
        else if (humanScore === computerScore) gameTie = true;
        else gameWin = false;

        const contentContainer = document.querySelector(".content");
        let child = contentContainer.lastElementChild; //get last child in list
        while (child) {
            contentContainer.removeChild(child);   //remove currently selected child
            child = contentContainer.lastElementChild; //update child
        }

        const newHeader = document.createElement("header");
        newHeader.classList.add("instructions");
        if (gameWin) newHeader.textContent = `YOU WON IN ${numRounds} ROUNDS! Page will refresh in a few seconds`;
        else newHeader.textContent = `YOU LOST IN ${numRounds} ROUNDS! Page will refresh in a few seconds.`;
        contentContainer.appendChild(newHeader);

        const recordTitle = document.createElement("div");
        recordTitle.classList.add("record-container", "record-title");
        recordTitle.textContent = "RECORD OF ROUNDS PLAYED: ";
        contentContainer.appendChild(recordTitle);

        const gameRecordContainer = document.createElement("div");
        gameRecordContainer.classList.add("record-container");
        contentContainer.appendChild(gameRecordContainer);

        let counter = 0;
        roundArray.forEach(element => {
            counter++;
            const recordEntry = document.createElement("p");
            recordEntry.classList.add("record-entry");
            recordEntry.textContent = `Round ${counter}: \n ${element}`;
            gameRecordContainer.appendChild(recordEntry);
        });

        setTimeout(function () {
            location.reload();
        }, 8000); // Time in milliseconds
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

