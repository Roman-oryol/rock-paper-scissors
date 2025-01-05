let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let humanChoice = '';
  let isValidChoice = false;

  while (!isValidChoice) {
    humanChoice = prompt('Enter your choice: rock, paper, or scissors.', '');
    isValidChoice =
      humanChoice === 'rock' ||
      humanChoice === 'paper' ||
      humanChoice === 'scissors';
  }

  return humanChoice;
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
Score: ${humanScore} - ${computerScore}`);
}
