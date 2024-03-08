'use strict';

let randomNr = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayX = function (identifier, message) {
  document.querySelector(identifier).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayX('.message', '⛔️ No number!');
  } else if (guess === randomNr) {
    displayX('.message', '🎉 Correct Number!');
    displayX('.number', randomNr);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) highScore = score;
    displayX('.highscore', highScore);
  } else if (guess !== randomNr) {
    if (score > 1) {
      score--;
      displayX('.score', score);
      displayX('.message', guess > randomNr ? '📈 Too High!' : '📉 Too Low!');
    } else {
      displayX('.message', '💥 You lost the game');
      displayX('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNr = Math.floor(Math.random() * 20) + 1;
  score = 20;
  displayX('.message', 'Start guessing...');
  displayX('.number', '?');
  document.querySelector('.guess').value = '';
  displayX('.score', score);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

displayX('.score', score);

console.log(document.getElementsByTagName('body')[0].style.background);
