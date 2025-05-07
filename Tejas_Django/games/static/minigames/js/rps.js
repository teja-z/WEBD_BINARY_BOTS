function play(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computer = choices[Math.floor(Math.random() * 3)];
    let result = '';
  
    if (choice === computer) result = "It's a tie!";
    else if ((choice === 'rock' && computer === 'scissors') ||
             (choice === 'paper' && computer === 'rock') ||
             (choice === 'scissors' && computer === 'paper')) {
      result = 'You win!';
    } else {
      result = 'You lose!';
    }
  
    document.getElementById('result').innerText = `Computer chose ${computer}. ${result}`;
  }
  