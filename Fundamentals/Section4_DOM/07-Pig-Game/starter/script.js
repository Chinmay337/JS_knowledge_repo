'use strict';

let scores = 0;
const currentPlayerText = '🙌 Current Player';
// initializing player to player !
let currentPlayer = document.querySelector('.btn--current');
currentPlayer.textContent += ' 1';

const diceel = document.querySelector('.dice');
diceel.classList.add('hidden');

document.querySelector('.btn--roll').addEventListener('click', () => {
  let randomnum = Math.trunc(Math.random() * 6) + 1;
  diceel.classList.remove('hidden');
  diceel.src = `dice-${randomnum}.png`;
  if (randomnum !== 1) {
    scores += randomnum;
    document.getElementById('current--0').textContent = scores;
  } else {
    scores = 0;
    document.getElementById('current--0').textContent = scores;
    currentPlayer.textContent = currentPlayerText + ' 2';
  }
});

// New game functionality

const newGame = document.querySelector('.btn--new');
newGame.addEventListener('click', () => {
  diceel.classList.add('hidden');
  scores = 0;
  document.getElementById('current--0').textContent = scores;
});
