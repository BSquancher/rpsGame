
let computerHand = ""; //computerHand is a STRING that will be the computer's selection
let humanHand = 5; //humnaHand is a STRING that will be the USER's selection


// Hands to values to compare

let computerChoice = 5;
//scoreeboard variables

let humanScore = 0;
let computerScore = 0;


const roundButton = document.querySelector("#roundButton"); //play a single round
const matchButton = document.querySelector("#matchButton"); // play an entire match (5 rounds)

const playerChoice = document.querySelector("#playerChoice"); //scoreBoard Log
const scoreBoard= document.querySelector("#scoreBoard");
const roundResult = document.querySelector("#roundResult");
//On click of button it will ask you to type your answer make this a function

function getHumanChoice(){
  let sign = prompt("Choose ROCK, PAPER OR SCISSORS!");


    if (sign === null){
      playerChoice.innerText = "Please, choose your character!";
    } else if (sign.toLowerCase() === ""){
      playerChoice.innerText = "Please, make a selection";
    } else if (sign.toUpperCase() === "ROCK"){
      playerChoice.innerText = "Player selected: ROCK!";
      humanHand = 0;
    } else if (sign.toUpperCase() === "PAPER"){
      playerChoice.innerText = "Player selected: PAPER!";
      humanHand = 1;
    } else if (sign.toUpperCase() === "SCISSORS"){
      playerChoice.innerText = "Player selected: SCISSORS!";
      humanHand = 2;
    } else {
      playerChoice.innerText = `${sign} is NOT a valid selection!`;
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



// computerHand = getComputerChoice();

//Makes the function execute when button is clicked
roundButton.addEventListener("click", () => {
  humanHand = getHumanChoice();
  computerHand = getComputerChoice();

switch(computerHand){
  case 'ROCK!':
  computerChoice = 0;
  break;

  case 'PAPER!':
  computerChoice = 1;
  break;

  case 'SCISSORS!':
  computerChoice = 2;
  break;
}
// console.log(computerHand);
// console.log(humanHand);
// console.log(computerChoice);

playRound(humanHand, computerChoice);

});

//play a round of ROCK PAPER SCISSORS
function playRound(humanHand, computerChoice){

  if (humanHand === computerChoice){
    roundResult.innerText = "DRAW!";
    scoreBoard.innerText = `SCORE: Player: ${humanScore} | Computer ${computerScore}`;
  } else if (humanHand === 0 && computerChoice === 1){
    //player LOST
    roundResult.innerText = "PAPER covers ROCK!, ROUND LOST"
    computerScore +=1;
    scoreBoard.innerText = `SCORE: Player: ${humanScore} | Computer ${computerScore}`;
  } else if (humanHand === 0 && computerChoice === 2){
    //player WIN
    roundResult.innerText = "ROCK breaks SCISSORS! , ROUND WON!!!"
    humanScore +=1;
    scoreBoard.innerText = `SCORE: Player: ${humanScore} | Computer ${computerScore}`;
  }
  else if (humanHand === 1 && computerChoice === 0){
    //player WIN
    roundResult.innerText = "PAPER covers ROCK!, ROUND WON!!!"
    humanScore +=1;
    scoreBoard.innerText = `SCORE: Player: ${humanScore} | Computer ${computerScore}`;
  }
  else if (humanHand === 1 && computerChoice === 2){
    //player lose
    roundResult.innerText = "SCISSORS cuts PAPER!, ROUND LOST"
    computerScore +=1;
    scoreBoard.innerText = `SCORE: Player: ${humanScore} | Computer ${computerScore}`;
  }
  else if (humanHand === 2 && computerChoice === 0){
    //player lose
    roundResult.innerText = "ROCK breaks SCISSORS!, ROUND LOST"
    computerScore +=1;
    scoreBoard.innerText = `SCORE: Player: ${humanScore} | Computer ${computerScore}`;
  }
  else if (humanHand === 2 && computerChoice === 1){
    //player win
    roundResult.innerText = "SCISSORS cuts PAPER!, ROUND WON!!!"
    humanScore +=1;
    scoreBoard.innerText = `SCORE: Player: ${humanScore} | Computer ${computerScore}`;
  }
  else{
    console.log("ERROR!");
  }

  if (humanScore === 5){
    roundResult.innerText = "WINNER WINNER CHICKEN DINNER!"
    scoreBoard.innerText = "Won 5 rounds! MATCH OVER";
  }

  if (computerScore === 5){
    roundResult.innerText = "YOU LOSE!"
    scoreBoard.innerText = "Lost 5 rounds! MATCH OVER";
  }
}
//BUTTON FOR ENTIRE MATCH
matchButton.addEventListener("click", () => {

  humanHand = getHumanChoice();
  computerHand = getComputerChoice();

  switch(computerHand){
    case 'ROCK!':
      computerChoice = 0;
      break;

    case 'PAPER!':
      computerChoice = 1;
      break;

    case 'SCISSORS!':
      computerChoice = 2;
      break;
} //END OF SWITCH
playMatch(humanHand, computerChoice);


});

function playMatch (humanHand, computerChoice){

if (humanScore === 5){
  roundResult.innerText = "WINNER WINNER CHICKEN DINNER!"
  scoreBoard.innerText = "Won 5 rounds! MATCH OVER";

} else if (computerScore === 5){
  roundResult.innerText = "YOU LOSE!"
  scoreBoard.innerText = "Lost 5 rounds! MATCH OVER";

} else {
  while(humanScore != 5 || computerScore != 5){
  playRound(humanHand, computerChoice);
}// WHILE LOOP
} //ELSE STATEMENT
} //END OF FUNCTION
