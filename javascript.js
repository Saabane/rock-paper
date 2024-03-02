"use strict";

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
let playerCount = 0;
let computerCount = 0;  

function getComputerChoice(playerSelection) 
{
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        console.log(`You used ${playerSelection} and Computer chose Rock`);
        return rock;
    } else if (randomNumber === 1) {
        console.log(`You used ${playerSelection} and Computer chose Paper`);
        return paper;
    } else {
        console.log(`You used ${playerSelection} and Computer chose Scissors`);
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    
    if  (playerSelection === computerSelection) 
    {
        console.log("It's a tie");
    } else if ((playerSelection === paper && computerSelection === rock) ||
               (playerSelection === scissors && computerSelection === paper) ||
               (playerSelection === rock && computerSelection === scissors)) {
        playerCount++;
        console.log(`Your Points: ${playerCount}`);
        console.log("You win this round");
    } else if ((playerSelection === paper && computerSelection === scissors) ||
    (playerSelection === scissors && computerSelection === rock) ||
    (playerSelection === rock && computerSelection === paper)) 
    {
        console.log("You lose this round");
        computerCount++;
        console.log(`Computer Points: ${computerCount}`);
    }
    else {
        console.log("Write the text correctly please");
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round: ${i+1}`);
        const playerSelection = prompt("Pick Rock or Paper or Scissors:");
        const computerSelection = getComputerChoice(playerSelection);
        playRound(playerSelection, computerSelection); 
    }
    if (playerCount < computerCount) {
        console.log(`Computer has ${computerCount} Points you lost`);
    }else
    {
        console.log(`You have ${playerCount} Point you win`);
    }
}

playGame();