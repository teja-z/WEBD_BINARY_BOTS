const secret = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  const feedback = document.getElementById('feedback');

  if (guess === secret) {
    feedback.innerText = "Correct!";
  } else {
    feedback.innerText = guess < secret ? "Too low!" : "Too high!";
  }
}
