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

console.log(getComputerChoice());