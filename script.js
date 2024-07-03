let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let r = "Rock";
    let p = "Paper";
    let s = "Scissors";

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0){
        return r;
    }

    else if (randomNumber == 1){
        return p;
    }

    return s;

}

function getHumanChoice() {
    let input = prompt("Enter rock, paper, or scissors");

    if (input.toLowerCase() == "rock"){
        return "Rock";
    }

    else if (input.toLowerCase() == "paper"){
        return "Paper";
    }

    else if (input.toLowerCase() == "scissors"){
        return "Scissors";
    }

    else {
        console.log("Error, reenter your choice");
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You Win");
        humanScore++;
        return;
    }
    else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You Lose");
        computerScore++;
        return;
    }
    else if (humanChoice == "Rock") {
        console.log("Tie");
    }

    if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You Win");
        humanScore++;
        return;
    }
    else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You Lose");
        computerScore++;
        return;
    }
    else if (humanChoice == "Paper") {
        console.log("Tie");
    }

    if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You Win");
        humanScore++;
        return;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You Lose");
        computerScore++;
        return;
    }
    else if (humanChoice == "Scissors") {
        console.log("Tie");
    }
}





function playGame () {
    let humanChoice = "";
    let computerChoice = "";

    for (let i = 0; i < 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Computer Score: " + computerScore);
    console.log("Your Score: " + humanScore);

}

playGame();