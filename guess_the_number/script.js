'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// Define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//set the starting score
let score = 20; //score is called *State Variable*; it's part of the application's *state*.

//set the starting highscore
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// listen to event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 1) First scenario is to assume that there's no input (== falsy value)
  // 2) IF guess is false, then !guess is true
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   '✋Enter a number between 1-20⛔';
    displayMessage('✋Enter a number between 1-20⛔');

    //If the player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct!😊');
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('.number').textContent = secretNumber;

    //Background changes to green
    document.querySelector('body').style.backgroundColor = '#60b347';

    //Box length doubles (to 30 rem)
    document.querySelector('.number').style.width = '30rem';

    //Set the new high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //If the guessed number is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!😞' : 'Too low!😞');
      score--; //if number is incorrect, lose a point
      document.querySelector('.score').textContent = score; //new score
    } else {
      displayMessage('👎You lose');
      document.querySelector('.score').textContent = 0;
    }
  }

  // //If the guessed number is too high
  // else if (guess > secretNumber) {
  //   //When score hits 0, function returns "0" with "You lose"
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!😞';
  //     score--; //if number is incorrect, lose a point
  //     document.querySelector('.score').textContent = score; //new score
  //   } else {
  //     document.querySelector('.message').textContent = '👎You lose';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //If the guessed number is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!😞';
  //     score--; //if number is incorrect, lose a point
  //     document.querySelector('.score').textContent = score; //new score
  //   } else {
  //     document.querySelector('.message').textContent = '👎You lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//Play again --> reset everything
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
