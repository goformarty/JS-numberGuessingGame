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
	// set userGuess to value from the text field 
	//and make sure user enetered a number
	var userGuess = Number(guessField.value);

	if(guessCount===1) {
		guesses.textContent = 'Previous guesses: ';
	}
	guesses.textContent += userGuess + ' ';

	if (userGuess===randomNumber) {
		lastResult.textContent = 'Congratulations! You got it right!';
		lastResult.style.backgroundColor = 'green';
		lowOrHigh.textContent = '';
		setGameOver();
	} else if (guessCount === 10) {
		lastResult.textContent = 'GAME OVER!';
		setGameOver();
	} else {
		lastResult.textContent = 'Wrong!';
		lastResult.style.backgroundColor = 'red';
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

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
	// disable submit button and text field
	guessSubmit.disabled = true;
	guessField.disabled = true;

	//generate new reset button
	resetButton = document.createElement('button');
	resetButton.textContent = 'Start new game';
	document.body.appendChild(resetButton);
	// set click event listener to reset button
	resetButton.addEventListener('click', resetGame);
}



