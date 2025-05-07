let board = Array(9).fill(null);
let turn = 'X';

function startGame() {
  board = Array(9).fill(null);
  turn = 'X';
  document.querySelectorAll('td').forEach(cell => cell.innerText = '');
  document.getElementById('winner').innerText = '';
}

function move(cell, index) {
  if (!board[index] && !document.getElementById('winner').innerText) {
    board[index] = turn;
    cell.innerText = turn;

    if (checkWinner()) {
      document.getElementById('winner').innerText = `${turn} wins!`;
    } else if (board.every(c => c !== null)) {
      document.getElementById('winner').innerText = "It's a tie!";
    } else {
      turn = turn === 'X' ? 'O' : 'X';
    }
  }
}


function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winPatterns.some(p => board[p[0]] && board[p[0]] === board[p[1]] && board[p[1]] === board[p[2]]);
}
