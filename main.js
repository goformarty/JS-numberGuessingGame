//alert('JS is here!');
var randomNumber = Math.floor(Math.random()*100)+1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHigh');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

function checkGuess() {
	var userGuess = Number(guessField.value);
	if(guessCount===1) {
		guess.textContent = 'Previous guesses: ';
	}
	guesses.textContent = userGuess + ' ';

	if (userGuess===randomNumber) {
		lastResult.textContent = 'Congratulations! You got it right!';
		lastResult.style.backgrounColor = 'green';
		lowOrHigh.textContent = '';
		setGameOver();
	} else if (count === 10) {
		lastResult.textContent = 'GAME OVER!';
		setGameOver();
	} else {
		lastResult.textContent = 'Wrong!';
		lastResult.style.backgrounColor = 'red';
		if (userGuess < randomNumber) {
			lowOrHigh.textContent = 'My number is higher!';
		} else if (userGuess > randomNumber) {
			lowOrHigh.textContent = 'My number is lower!';
		}
	}
	guessCount++;
	guessField.value= '';
	guessField.focus();
}
