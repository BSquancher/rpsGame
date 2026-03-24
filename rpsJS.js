
let computerHand = ""; //computerHand is a STRING that will be the computer's selection
let humanHand = 5; //humnaHand is a STRING that will be the USER's selection

const roundButton = document.querySelector("#roundButton"); //play a single round
const matchButton = document.querySelector("#matchButton"); // play an entire match (5 rounds)

const scoreBoard = document.querySelector("#scoreBoard") //scoreBoard Log

//On click of button it will ask you to type your answer make this a function

function getHumanChoice(){
  let sign = prompt("Choose ROCK, PAPER OR SCISSORS!");
  

    if (sign === null){
      scoreBoard.innerText = "Please, choose your character!";
    } else if (sign.toLowerCase() === ""){
      scoreBoard.innerText = "Please, make a selection";
    } else if (sign.toUpperCase() === "ROCK"){
      scoreBoard.innerText = "ROCK!";
      humanHand = 0;
    } else if (sign.toUpperCase() === "PAPER"){
      scoreBoard.innerText = "PAPER!";
      humanHand = 1;
    } else if (sign.toUpperCase() === "SCISSORS"){
      scoreBoard.innerText = "SCISSORS!";
      humanHand = 2;
    } else {
      scoreBoard.innerText = `${sign} is NOT a valid selection!`;
    }
return humanHand;
}



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



computerHand = getComputerChoice();

roundButton.addEventListener("click", () => {
  humanHand = getHumanChoice();

console.log(computerHand);
console.log(humanHand);

});
