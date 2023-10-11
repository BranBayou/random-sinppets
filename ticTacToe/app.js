const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCell = [
  "", "", "", "", "", "", "", "", ""
];

function createBoard() {
  startCell.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click",addGo);
    gameBoard.append(cellElement);
  });
}

createBoard();

function addGo(e) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add("cross");
  e.target.append(goDisplay);
}
