const playerChoiceButtons = document.querySelectorAll('button:not(#reset)');
const resultElement = document.querySelector('#result');
const resetBtn = document.querySelector('#reset');
const titleElement = document.querySelector('h2');

const WINNING_SCORE = 5;

let humanScore = 0;
let computerScore = 0;

resetBtn.style.display = 'none';
resetBtn.addEventListener('click', reset);

function reset() {
  playerChoiceButtons.forEach((button) => {
    button.disabled = false;
  });
  humanScore = 0;
  computerScore = 0;
  resetBtn.style.display = 'none';
  titleElement.innerHTML = `Please make your choice.<br /> The first to reach 5 points wins!`;
  resultElement.innerHTML = '';
}

playerChoiceButtons.forEach((button) => {
  button.addEventListener('click', handlePlayerChoice);
});

function handlePlayerChoice(evt) {
  playRound(getHumanChoice(evt), getComputerChoice());
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    return 'rock';
  }

  if (computerChoice === 2) {
    return 'paper';
  }

  return 'scissors';
}

function getHumanChoice(evt) {
  return evt.target.id;
}

function displayResult(
  humanScore,
  humanChoice,
  computerScore,
  computerChoice,
  isHumanWinner
) {
  let message = `Round result:
  You chose ${humanChoice},
  Computer chose ${computerChoice}.<br>
  You ${isHumanWinner ? 'win' : 'lose'}!<br>
  Current score: ${humanScore} - ${computerScore}`;
  let isGameOver =
    humanScore === WINNING_SCORE || computerScore === WINNING_SCORE;

  if (isGameOver) {
    const isHumanWinner = humanScore === WINNING_SCORE;
    message = `${isHumanWinner ? 'You win' : 'Computer wins'} the game
    with a score of ${isHumanWinner ? humanScore : computerScore} : ${
      isHumanWinner ? computerScore : humanScore
    }!`;
    playerChoiceButtons.forEach((button) => {
      button.disabled = true;
    });
    resetBtn.style.display = 'block';
    titleElement.textContent = 'Game over!';
  }

  resultElement.innerHTML = message;
}

function playRound(humanChoice, computerChoice) {
  const isHumanWinner =
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock');

  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (isHumanWinner) {
    humanScore++;
  }

  if (!isHumanWinner) {
    computerScore++;
  }

  displayResult(
    humanScore,
    humanChoice,
    computerScore,
    computerChoice,
    isHumanWinner
  );
}
