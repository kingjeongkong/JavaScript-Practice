const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function pickComputerMove(playerMove) {
  const randomNumber = Math.random();
  let computerMove = '';
  let result = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  if (playerMove === computerMove) {
    result = 'Tie.';
    score.ties++;
  } else if (
    (playerMove === 'rock') && (computerMove === 'scissors') ||
    (playerMove === 'paper') && (computerMove === 'rock') ||
    (playerMove === 'scissors') && (computerMove === 'paper')
  ) {
    result = 'You Win.';
    score.wins++;
  } else {
    result = 'You Lose.';
    score.losses++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You 
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
}

function resetScore() {
  score.wins = 0
  score.losses = 0
  score.ties = 0
  localStorage.removeItem('score');

  updateScoreElement()
}

function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML = `Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;
}