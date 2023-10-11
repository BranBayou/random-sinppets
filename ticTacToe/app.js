const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCell = [
  "", "", "", "", "", "", "", "", ""
];

function createBoard() {
  startCell.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.addEventListener("click",addGo);
    cellElement.id = index;
    gameBoard.append(cellElement);
  });
}

createBoard();

function addGo(e) {
  console.log(e.target);
}
