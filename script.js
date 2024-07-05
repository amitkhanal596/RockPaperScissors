let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");

const btn1 = document.createElement("button");
btn1.textContent = "Rock";

const btn2 = document.createElement("button");
btn2.textContent = "Paper";

const btn3 = document.createElement("button");
btn3.textContent = "Scissors";

container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);

let displayResults = document.createElement("div");
displayResults.classList.add("display");

let displayOutcome = document.createElement("p");
let displayComputerScore = document.createElement("p");
let displayHumanScore = document.createElement("p");
const displayWinner = document.createElement("h1");

displayResults.appendChild(displayOutcome);
displayResults.appendChild(displayComputerScore);
displayResults.appendChild(displayHumanScore);
displayResults.appendChild(displayWinner);
container.appendChild(displayResults);


displayOutcome.textContent = "";
displayHumanScore.textContent = "Your Score: " + humanScore;
displayComputerScore.textContent = "Computer Score: " + computerScore;







btn1.addEventListener("click", 
    function() {
        playRound("Rock", getComputerChoice())
    }
);

btn2.addEventListener("click", 
    function() {
        playRound("Paper", getComputerChoice())
    }
);

btn3.addEventListener("click", 
    function() {
        playRound("Scissors", getComputerChoice())
    }
);




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



function playRound(humanChoice, computerChoice) {

    if (computerScore == 5){
        displayWinner.textContent = "Computer Wins";
        throw '';
    }

    else if (humanScore == 5){
        displayWinner.textContent = "You Win";
        throw '';
    }


    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        displayOutcome.textContent = "You Win";
        humanScore++;
        displayHumanScore.textContent = "Your Score: " + humanScore;
        return;
    }
    else if (humanChoice == "Rock" && computerChoice == "Paper") {
        displayOutcome.textContent = "You Lose";
        computerScore++;
        displayComputerScore.textContent = "Computer Score: " + computerScore;
        return;
    }
    else if (humanChoice == "Rock") {
        displayOutcome.textContent = "Tie";
    }

    if (humanChoice == "Paper" && computerChoice == "Rock") {
        displayOutcome.textContent = "You Win";
        humanScore++;
        displayHumanScore.textContent = "Your Score: " + humanScore;
        return;
    }
    else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        displayOutcome.textContent = "You Lose";
        computerScore++;
        displayComputerScore.textContent = "Computer Score: " + computerScore;
        return;
    }
    else if (humanChoice == "Paper") {
        displayOutcome.textContent = "Tie";
    }

    if (humanChoice == "Scissors" && computerChoice == "Paper") {
        displayOutcome.textContent = "You Win";
        humanScore++;
        displayHumanScore.textContent = "Your Score: " + humanScore;
        return;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        displayOutcome.textContent = "You Lose";
        computerScore++;
        displayComputerScore.textContent = "Computer Score: " + computerScore;
        return;
    }
    else if (humanChoice == "Scissors") {
        displayOutcome.textContent = "Tie";
    }
}