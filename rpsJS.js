
let computerHand = ""; //computerHand is a STRING that will be the computer's selection

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

console.log(computerHand);
