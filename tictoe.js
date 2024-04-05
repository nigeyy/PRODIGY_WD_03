let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

function handleClick(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;
    if (checkWin()) {
      document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (!gameBoard.includes('')) {
      document.getElementById('message').textContent = "It's a tie!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('message').textContent = `Player ${currentPlayer}'s Turn`;
    }
  }
}

function checkWin() {
  return winningCombos.some(combination => {
    return combination.every(index => {
      return gameBoard[index] === currentPlayer;
    });
  });
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
  document.getElementById('message').textContent = "Player X's Turn";
}
