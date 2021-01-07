'use strict';

//Hidden winning number
let winner = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.winner').textContent = winner;
let score = 20;
let highscore = 0;

//User types in a number
document.querySelector('.check').addEventListener('click', function () {
	const userNumber = Number(document.querySelector('.user-number').value);

	// User number is blank or 0
	if (!userNumber) {
		document.querySelector('.message').textContent =
			'Enter a number between 1 - 20';

		// User number matches winning number
	} else if (userNumber === winner) {
		document.querySelector('.winner').textContent = winner;
		document.querySelector('.message').textContent = 'You WIN!';
		document.querySelector('.winner').textContent = winner;

		if (score > highscore);
		{
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

		// User number !== winning number
	} else if (userNumber !== winner) {
		if (score > 1) {
			document.querySelector('.message').textContent =
				userNumber > winner ? 'Too high' : 'Too low';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'You lose...';
			document.querySelector('.score').textContent = 0; //set score to 0
		}
	}

	// Reset the game
	document.querySelector('.again').addEventListener('click', function () {
		score = 20;
		winner = Math.trunc(Math.random() * 20 + 1);
		document.querySelector('.score').textContent = score;
		document.querySelector('.message').textContent = 'Take a guess!';
		document.querySelector('.winner').textContent = '?';
		document.querySelector('.user-number').value = '';
	});
	/////commented out for spacing////
});
