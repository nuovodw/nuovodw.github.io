'use strict';
//Set dice to zero
const scorePlayer0 = document.getElementById('score--0');
const scorePlayer1 = document.getElementById('score--1');
const crntScorePlayer0 = document.getElementById('current--0');
const dice = document.querySelector('.dice');
let currentScore = 0;

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;

//hide dice image
//1. add .hidden to css
dice.classList.add('hidden');

//random dice roll
const btnRoll = document.addEventListener('click', function () {
  //Random number between 1-6
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNumber);

  //show dice
  dice.classList.remove('hidden');

  //match dice image with randomNumber
  dice.src = `dice-${randomNumber}.png`;

  //If rolled 1, switch to next player
  if (randomNumber !== 1) {
    currentScore = currentScore + randomNumber;
    crntScorePlayer0.textContent = currentScore;
  } else {
    //
  }
});
