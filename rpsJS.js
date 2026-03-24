
let computerHand = ""; //computerHand is a STRING that will be the computer's selection
let humanHand = ""; //humnaHand is a STRING that will be the USER's selection

const roundButton = document.querySelector("#roundButton"); //play a single round
const matchButton = document.querySelector("#matchButton"); // play an entire match (5 rounds)

const log = document.querySelector("#scoreBoard") //scoreBoard Log

//On click of button it will ask you to type your answer

roundButton.addEventListener("click", () =>{
  let sign = prompt("Choose ROCK, PAPER OR SCISSORS!");

    if (sign === null){
      log.innerText = "Please, choose your character!";
    } else if (sign.toLowerCase() === ""){
      log.innerText = "Please, make a selection";
    } else if (sign.toUpperCase() === "ROCK"){
      log.innerText = "ROCK!";
    } else if (sign.toUpperCase() === "PAPER"){
      log.innerText = "PAPER!";
    } else if (sign.toUpperCase() === "SCISSORS"){
      log.innerText = "SCISSORS!";
    } else {
      log.innerText = `${sign} is NOT a valid selection!`;
    }

});





//RAND function for helping computer select move
function getRandomInt(){
  return Math.floor(Math.random() * 3);
}


//sets the computers move to one of THREE possible outcomes
function getComputerChoice(){
let selectionNumber = 5;

selectionNumber = getRandomInt();

if (selectionNumber == 0){
  computerHand = "ROCK!";
} else if (selectionNumber == 1){
  computerHand= "PAPER!";
} else if (selectionNumber ==2){
  computerHand = "SCISSORS!";
} else{
  computerHand = "ERROR!";
}

  return computerHand;
}

function getHumanChoice(){

  prompt("Please Type ROCK PAPER OR SCISSORS!")
}

computerHand = getComputerChoice();

console.log(computerHand);
console.log(humanHand);
