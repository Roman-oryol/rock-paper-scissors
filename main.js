const NUMBER_OF_ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;

playGame();

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

function getHumanChoice(roundNumber) {
  let humanChoice = '';
  let isValidChoice = false;
  const roundNumberMessage = `${
    roundNumber ? 'Round ' + roundNumber + ' of ' + NUMBER_OF_ROUNDS : ''
  }`;

  while (!isValidChoice) {
    humanChoice = prompt(
      `${roundNumberMessage}
Enter your choice: rock, paper, or scissors.`,
      ''
    );
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
Score: ${humanScore} : ${computerScore}`);
}

function playGame() {
  for (let i = 1; i <= NUMBER_OF_ROUNDS; i++) {
    const humanChoice = getHumanChoice(i);
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    alert(`The game is over!
You won with a score of ${humanScore} : ${computerScore}!`);
  } else if (humanScore === computerScore) {
    alert(`The game is over!
It's a draw with a score of ${humanScore} : ${computerScore}!`);
  } else {
    alert(`The game is over!
You lose with a score of ${humanScore} : ${computerScore}!`);
  }
}
