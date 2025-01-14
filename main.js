const playerChoiceButtons = document.querySelectorAll('button');
const resultElement = document.querySelector('#result');

let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  let message = '';
  const isHumanWinner =
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock');

  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (isHumanWinner) {
    message = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else if (humanChoice === computerChoice) {
    message = "It's a draw!";
  } else {
    message = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  alert(`${message}
Score: ${humanScore} : ${computerScore}`);
}
