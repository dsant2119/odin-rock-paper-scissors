// console.log("Hello World!");

let getComputerChoice = () => {
    let num = Math.floor(Math.random() * 100 + 1);
    // console.log(num)
    if (num >= 0 && num <= 33) return "Rock";
    else if (num > 33 && num <= 66) return "Paper";
    else return "Scissors";
}

console.log(getComputerChoice());

