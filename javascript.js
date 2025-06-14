let randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('message');

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
    message.style.color = 'green';
  } else if (guess < randomNumber) {
    message.textContent = "Too low! Try again.";
    message.style.color = 'orange';
  } else {
    message.textContent = "Too high! Try again.";
    message.style.color = 'orange';
  }
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').textContent = '';

}

