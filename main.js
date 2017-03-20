//alert('JS is here!');
var randomNumber = Math.floor(Math.random()*100)+1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHigh');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
guessField.focus();
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

function resetGame() {
	//set guessCount back to 1 
	guessCount = 1;

	// clear information in paragraphs
	var resultParas = document.querySelectorAll('.resultParas p');
	for (var i = 0; i<resultParas.length; i++) {
		resultParas[i].textContent = '';
	}

	//remove the reset button
	resetButton.parentNode.removeChild(resetButton);

	// enable submit button and text field
	guessSubmit.disabled = false;
	guessField.disabled = false;
	// empty and focus to the text field
	guessField.value = '';
	guessField.focus();

	// remove background color
	lastResult.style.backgroundColor = 'white';

	// generate new random number
	randomNumber = Math.floor(Math.random()*100)+1;
}

