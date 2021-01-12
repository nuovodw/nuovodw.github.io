'use strict';
//Set dice to zero
const scorePlayer0 = document.getElementById('score--0');
const scorePlayer1 = document.getElementById('score--1');
const crntScorePlayer0 = document.getElementById('current--0');
const crntScorePlayer1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
let currentScore = 0;
let activePlayer = 0; //player 1 = 0; player 2 = 1;

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;

//hide dice image
//1. add .hidden to css
dice.classList.add('hidden');

//random dice roll
const btnRoll = document.addEventListener('click', function () {
  //Random number between 1-6
  const randomNumber = Math.trunc(Math.random() * 6 + 1);

  //show dice
  dice.classList.remove('hidden');

  //match dice image with randomNumber
  dice.src = `dice-${randomNumber}.png`;

  //If rolled 1, switch to next player
  if (randomNumber !== 1) {
    currentScore = currentScore + randomNumber;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    //reset current score
    currentScore = 0;

    //if active player is current--0, then switch to current--1. Else activePlayer is 0.
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }

    //switch background with class "player--active"
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  }
});
