const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#restartButton");
const resetScoresButton = document.querySelector("#resetScoresButton");
const xWinsDisplay = document.querySelector("#xWins");
const oWinsDisplay = document.querySelector("#oWins");
const drawsDisplay = document.querySelector("#draws");
const totalGamesDisplay = document.querySelector("#totalGames");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
let xWins = 0;
let oWins = 0;
let draws = 0;
let totalGames = 0;

initializeGame();

function initializeGame() {
  cells.forEach(cell => {
    cell.addEventListener("click", cellClicked);
    cell.addEventListener("keydown", cellKeyDown);
  });
  restartButton.addEventListener("click", restartGame);
  resetScoresButton.addEventListener("click", resetScores);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}
function cellKeyDown(e) {
  const key = e.key;
  if (key === "Enter" || key === " ") {
    e.preventDefault();
    this.click();
    return;
  }
  const index = Number(this.getAttribute("data-cell-index"));
  let nextIndex = null;
  if (key === 'ArrowRight') {
    nextIndex = (index % 3 === 2) ? index - 2 : index + 1;
  } else if (key === 'ArrowLeft') {
    nextIndex = (index % 3 === 0) ? index + 2 : index - 1;
  } else if (key === 'ArrowUp') {
    nextIndex = (index - 3 >= 0) ? index - 3 : index + 6;
  } else if (key === 'ArrowDown') {
    nextIndex = (index + 3 < 9) ? index + 3 : index - 6;
  }
  if (nextIndex !== null) {
    e.preventDefault();
    cells[nextIndex].focus();
  }
}

function cellClicked() {
  const cellIndex = this.getAttribute("data-cell-index");

  if(options[cellIndex] !== "" || !running){
    return;
  }

  updateCell(this, cellIndex);
  checkWinner();
}
function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.setAttribute('data-player', currentPlayer);
  cell.setAttribute('aria-pressed', 'true');
  cell.disabled = true;
}
function changePlayer() {
  currentPlayer = (currentPlayer === "X") ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner() {
  let roundWon = false;
  let winningCombo = null;

  for(let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if(cellA === "" || cellB === "" || cellC === "") {
      continue;
    }
    if(cellA === cellB && cellB === cellC){
      roundWon = true;
      winningCombo = condition;
      break;
    }
  }
  if(roundWon) {
    statusText.textContent = `${currentPlayer} Wins!`;
    running = false;
    if (winningCombo) {
      winningCombo.forEach(i => cells[i].classList.add('win'));
    }
    // Update win counter
    if (currentPlayer === "X") {
      xWins++;
      xWinsDisplay.textContent = xWins;
    } else {
      oWins++;
      oWinsDisplay.textContent = oWins;
    }
    totalGames++;
    totalGamesDisplay.textContent = totalGames;
    cells.forEach(cell => cell.disabled = true);
  }
  else if(!options.includes("")){
    statusText.textContent = `Draw!`;
    running = false;
    draws++;
    drawsDisplay.textContent = draws;
    totalGames++;
    totalGamesDisplay.textContent = totalGames;
  } 
  else{
    changePlayer();
  }
}
function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => {
    cell.textContent = "";
    cell.disabled = false;
    cell.setAttribute('aria-pressed', 'false');
    cell.removeAttribute('data-player');
    cell.classList.remove('win');
  });
  running = true;
}

function resetScores() {
  xWins = 0;
  oWins = 0;
  draws = 0;
  totalGames = 0;
  xWinsDisplay.textContent = 0;
  oWinsDisplay.textContent = 0;
  drawsDisplay.textContent = 0;
  totalGamesDisplay.textContent = 0;
  restartGame();
}