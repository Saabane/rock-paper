"use strict";

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const playerSelection = prompt("Enter a word:");

function getComputerChoice() 
{
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        console.log("Computer chose Rock");
        return rock;
    } else if (randomNumber === 1) {
        console.log("Computer chose Paper");
        return paper;
    } else {
        console.log("Computer chose Scissors");
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection.toLowerCase() === rock && computerSelection === rock) ||
        (playerSelection.toLowerCase() === paper && computerSelection === paper) ||
        (playerSelection.toLowerCase() === scissors && computerSelection === scissors)) {
        return "It's a tie";
    } else if (playerSelection.toLowerCase() === paper && computerSelection === rock) 
    {
        return "You win, Paper beats rock";
    }else if (playerSelection.toLowerCase() === scissors && computerSelection === paper) 
    {
        return "You win, Scissors beats paper";
    }else if (playerSelection.toLowerCase() === rock && computerSelection === scissors) {
        return "You win, Rock beats scissors";
    }else if (playerSelection.toLowerCase() === paper && computerSelection === scissors) {
        return "You lose, Scissors beats paper";
    }else if (playerSelection.toLowerCase() === scissors && computerSelection === rock) {
        return "You lose, Rock beats scissors";
    }else {
        return "You lose, Paper beats rock";
    }
  }

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));