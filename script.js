let userscore = 0;
let computerscore = 0;
let randomChocice = Math.random();
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const drawGame = () => {
  message.innerText="Game was draw";

};
const showWinner = (userWin,userChoice,computerChoice) => {
  if (userWin){ 
    userscore++;
    userScore.innerText=userscore;
    message.innerText = `You Win!: Your ${userChoice} beats ${computerChoice}`;
    message.style.backgroungColor="green";

  }
  else{ 
    computerscore++;
    computerScore.innerText=computerscore;
    message.innerText = `You lose. ${computerChoice} beats your ${userChoice}`;
    message.style.backgroungColor="red";
}
};

const genCompputerCoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const playGame = (userChoice) => {
  //generate computer choice
  const computerChoice = genCompputerCoice();

  if (userChoice === computerChoice) {
    //Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors,rock
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,computerChoice,);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
