"use strict";

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

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
    
    if ((playerSelection.toLowerCase() === rock && computerSelection === rock) ||
        (playerSelection.toLowerCase() === paper && computerSelection === paper) ||
        (playerSelection.toLowerCase() === scissors && computerSelection === scissors)) {
        console.log("It's a tie");
    } else if (playerSelection.toLowerCase() === paper && computerSelection === rock) 
    {
        console.log("You win, Paper beats rock");
    }else if (playerSelection.toLowerCase() === scissors && computerSelection === paper) 
    {
        console.log("You win, Scissors beats paper");
    }else if (playerSelection.toLowerCase() === rock && computerSelection === scissors) {
        console.log("You win, Rock beats scissors");
    }else if (playerSelection.toLowerCase() === paper && computerSelection === scissors) {
        console.log("You lose, Scissors beats paper");
    }else if (playerSelection.toLowerCase() === scissors && computerSelection === rock) {
        console.log("You lose, Rock beats scissors");
    }else {
        console.log("You lose, Paper beats rock");
    }
}

function playGame() {
    const playerSelection = prompt("Enter a word:");
    const computerSelection = getComputerChoice(playerSelection);
    playRound(playerSelection, computerSelection);  
}

playGame();