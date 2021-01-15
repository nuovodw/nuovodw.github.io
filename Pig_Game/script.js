'use strict';
//Set dice to zero
const scorePlayer0 = document.getElementById('score--0');
const scorePlayer1 = document.getElementById('score--1');
const crntScorePlayer0 = document.getElementById('current--0');
const crntScorePlayer1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
let currentScore = 0;
let activePlayer = 0;
let totalScore = [0, 0]; //player 1 = 0; player 2 = 1;
let yesPlaying = true;

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;

//hide dice image
//1. add .hidden to css
dice.classList.add('hidden');

//random dice roll
btnRoll.addEventListener('click', function () {
  if (yesPlaying) {
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
  }
});

//Hold and add the current score to the total score; switch players
btnHold.addEventListener('click', function () {
  if (yesPlaying) {
    //add the score to the totalScore
    totalScore[`${activePlayer}`] =
      totalScore[`${activePlayer}`] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[`${activePlayer}`];

    //If score >=100, player wins, background color changes, and Roll and Hold buttons no longer work
    if (totalScore[`${activePlayer}`] >= 100) {
      yesPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      //switch players (copied/pasted from above)
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      if (activePlayer === 0) {
        activePlayer = 1;
      } else {
        activePlayer = 0;
      }
      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');
    }
  }
});

//Reset the game

btnNew.addEventListener('click', function () {
  //set all scores to 0
  yesPlaying = true;
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  crntScorePlayer0.textContent = 0;
  crntScorePlayer1.textContent = 0;

  //set player 1 as the starting player
  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  //set background colors
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  //hide dice
  dice.classList.add('hidden');
});
