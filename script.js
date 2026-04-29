// Set Username 
let username = prompt("Enter your Name");
let set = document.getElementById("user");
let msg = document.querySelector(".result");
let userScoreResult = document.querySelector("#user-score");
let compScoreResult = document.querySelector("#comp-score");
set.innerText = username;


// Initializing the Scores to zero
let userscore = 0;
let compscore = 0;


// Fetching User Choice
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


// Computer Choice Generation
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};


// Draw Function
const draw = () => {
  console.log("Game Draw!");
  msg.innerText = "Game Draw!";
  msg.style.color = "blue";
};


// Game Core Logic
const playGame = (userChoice) => {
  console.log("Your choice =", userChoice);

  const compChoice = genCompChoice();
  console.log("Computer's choice =", compChoice);

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } 
    else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } 
    else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};


// Show result Function
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("You Won!");
    msg.innerText = `You won, Your ${userChoice} beats ${compChoice}.`;
    msg.style.color = "green";
    userscore++;
    userScoreResult.innerText = userscore;

  } else {
    console.log("Computer Won :(");
    msg.innerText = `Computer won, ${compChoice} beats Your ${userChoice}.`;
    msg.style.color = "red";
    compscore++;
    compScoreResult.innerText = compscore;
  }

  console.log("Score:", userscore, "-", compscore);
};

