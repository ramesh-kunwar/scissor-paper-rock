/**
 *
 *  - get user choice
 *  - generate computer choice
 *
 *  - track user score
 *  - track computer score
 *  - track user total score
 *  - track computer total score
 *
 *  - those who  gets the score 3 first wins the game.
 *
 *
 *
 *
 *
 *
 */

let options = ["rock", "paper", "scissor"];

//  CHOICE
let userChoice = "rock";
let computerChoice = "rock";

// generating computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return (computerChoice = options[randomNumber]);
}

// selecting score board
const userScoreVal = document.querySelector("#userScoreVal");
const compScoreVal = document.querySelector("#compScoreVal");

// selecting result
const resultUserStat = document.querySelector("#result-user-stat");
const resultCompStat = document.querySelector("#result-comp-stat");
const resultFinalStat = document.querySelector("#result-final-stat");

let userScore = 0;
let computerScore = 0;
let totalUserScore = 0;
let totalComputerScore = 0;

// selecting user choice
const choice = document.querySelectorAll(".choice");

choice.forEach((ch) => {
  ch.addEventListener("click", function () {
    generateComputerChoice();

    if (ch.id == "r") {
      userChoice = "rock";
    } else if (ch.id == "p") {
      userChoice = "paper";
    } else if (ch.id == "s") {
      userChoice = "scissor";
    }

    // game logic
    // rock
    if (userChoice == "rock") {
      if (computerChoice == "scissor") {
        userScore += 1;
      } else if (computerChoice == "paper") {
        computerScore += 1;
      } else {
        userScore += 1;
        computerScore += 1;
      }
    }
    // paper
    else if (userChoice == "paper") {
      if (computerChoice == "rock") {
        userScore += 1;
        console.log("user win");
      } else if (computerChoice == "scissor") {
        computerScore += 1;
        console.log("computer win");
      } else {
        userScore += 1;
        computerScore += 1;

        console.log("draw");
      }
    }
    // scissor
    else {
      if (computerChoice == "paper") {
        userScore += 1;
        console.log("user win");
      } else if (computerChoice == "rock") {
        computerScore += 1;
        console.log("computer win");
      } else {
        userScore += 1;
        computerScore += 1;

        console.log("draw");
      }
    }
    console.log("user choice = " + userChoice);
    console.log("computer choice = " + computerChoice);

    userScoreVal.textContent = userScore;
    compScoreVal.textContent = computerScore;

    // game result logic
    let message = "";
    if (userScore >= 3 || computerScore >= 3) {
      alert("Game over. Please Refresh the page.");
      message = "Game over";
      resultUserStat.textContent += userScore;
      resultCompStat.textContent += computerScore;

      if (userScore === 3 && computerScore === 3) {
        resultFinalStat.textContent += "DRAW";
      } else if (computerScore == 3) {
        resultFinalStat.textContent += "COMPUTER";
      } else if (userScore === 3) {
        resultFinalStat.textContent += "USER";
      }
    }
  });
});
