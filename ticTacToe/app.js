const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCell = [
  "", "", "", "", "", "", "", "", ""
];

function createBoard() {
  startCell.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    gameBoard.append(cellElement);
  });
}

createBoard();