//computer move generation
function MakeCompMove() {
  let RandomMove = Math.random();
  let ComputerMove = "";
  if (RandomMove >= 0 && RandomMove < 1 / 3) {
    ComputerMove = "rock";
  } else if (RandomMove >= 1 / 3 && RandomMove < 2 / 3) {
    ComputerMove = "paper";
  } else if (RandomMove >= 2 / 3 && RandomMove < 1) {
    ComputerMove = "scissors";
  }

  return ComputerMove;
}
//compare computer and playermove and displaying score
let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  tie: 0,
  lose: 0,
};
function compareResults(playerMove) {
  const compMove = MakeCompMove();
  console.log("Player:", playerMove, "Computer:", compMove);

  let result = "";

  if (playerMove === "rock") {
    if (compMove === "rock") {
      result = "It's a tie!";
    } else if (compMove === "paper") {
      result = "You Lost";
    } else if (compMove === "scissors") {
      result = "You Won";
    }
  } else if (playerMove === "paper") {
    if (compMove === "rock") {
      result = "You Won";
    } else if (compMove === "paper") {
      result = "It's a tie!";
    } else if (compMove === "scissors") {
      result = "You Lost";
    }
  } else if (playerMove === "scissors") {
    if (compMove === "rock") {
      result = "You Lost";
    } else if (compMove === "paper") {
      result = "You Won";
    } else if (compMove === "scissors") {
      result = "It's a tie!";
    }
  }

  if (result === "You Won") {
    score.win += 1;
  } else if (result === "You Lost") {
    score.lose += 1;
  } else {
    score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScore();

  const emojiMap = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
  };

  document.querySelector(
    "#computerUserResult"
  ).innerHTML = `You chose: ${emojiMap[playerMove]} & Computer chose: ${emojiMap[compMove]}`;

  document.querySelector(
    "#comapreRES"
  ).innerText = ` Result of this round is: ${result}`;
}
//updating score and showing result

function updateScore() {
  document.querySelector(
    "#winsLoses"
  ).innerText = `Scores:- Wins: ${score.win}, Loses: ${score.lose}, Ties: ${score.tie} `;
}
//Reseting score to 0 default
function resetScore() {
  score = { win: 0, tie: 0, lose: 0 };
  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  document.querySelector(
    "#winsLoses"
  ).innerText = `Scores:- Wins: 0, Loses: 0, Ties: 0 `;
  document.querySelector("#computerUserResult").innerText = "";
  document.querySelector("#comapreRES").innerText = "";
}
