'use strict';

const again = document.querySelector('.again');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.label-score');
const highScoreLabel = document.querySelector('.label-highscore');

const randNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let highScore = 0;

check.addEventListener('click', () => {
  const guessedValue = guess.value;
  

  if(!guessedValue) {
    message.textContent = 'Enter only numbers';
  } else if(guessedValue == randNumber) {
    number.textContent = randNumber;
    message.textContent = 'Correct number ):';
    number.style.width = '7rem';
    if(score > highScore) {
      highScore = score;
      highScoreLabel.textContent = `High Score: ${highScore}`;
    }
  } else if(guessedValue !== randNumber) {
    if(score > 1) {
      message.textContent = guessedValue > randNumber ? 'Too high!' : 'Too low';
      score -= 1;
      scoreLabel.textContent = score;
    } else {
      message.textContent = 'You lost!';
      scoreLabel.textContent = 0;
    }
  }
});