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
    
    if  ((playerSelection.toLowerCase() === rock && computerSelection === rock) ||
        (playerSelection.toLowerCase() === paper && computerSelection === paper) ||
        (playerSelection.toLowerCase() === scissors && computerSelection === scissors)) 
    {
        console.log("It's a tie");
    } else if ((playerSelection.toLowerCase() === paper && computerSelection === rock) ||
               (playerSelection.toLowerCase() === scissors && computerSelection === paper) ||
               (playerSelection.toLowerCase() === rock && computerSelection === scissors)) {
        playerCount++;
        console.log(`playerPoint ${playerCount}`);
        console.log("You win");
    } else if ((playerSelection.toLowerCase() === paper && computerSelection === scissors) ||
    (playerSelection.toLowerCase() === scissors && computerSelection === rock) ||
    (playerSelection.toLowerCase() === rock && computerSelection === paper)) 
    {
        console.log("You lose,");
    }
    else {
        console.log("Write the text correctly please");
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Pick Rock or Paper or Scissors:");
        const computerSelection = getComputerChoice(playerSelection);
        console.log(i+1);
        playRound(playerSelection, computerSelection); 
    }
}

playGame();