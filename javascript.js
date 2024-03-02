"use strict";

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

function getComputerChoice() 
{
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        //console.log("Computer chose Rock");
        return rock;
    } else if (randomNumber === 1) {
        //console.log("Computer chose Paper");
        return paper;
    } else {
        //console.log("Computer chose Scissors");
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection === rock && computerSelection === rock) ||
        (playerSelection === paper && computerSelection === paper) ||
        (playerSelection === scissors && computerSelection === scissors)) {
        return "It's a tie";
    } else if (playerSelection === paper && computerSelection === rock) 
    {
        return "You win, Paper beats rock";
    }else if (playerSelection === scissors && computerSelection === paper) 
    {
        return "You win, Scissors beats paper";
    }else if (playerSelection === rock && computerSelection === scissors) {
        return "You win, Rock beats scissors";
    }else if (playerSelection === paper && computerSelection === scissors) {
        return "You lose, Scissors beats paper";
    }else if (playerSelection === scissors && computerSelection === rock) {
        return "You lose, Rock beats scissors";
    }else {
        return "You lose, Paper beats rock";
    }
  }

const playerSelection = rock;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));