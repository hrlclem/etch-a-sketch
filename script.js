const container = document.querySelector(".container");

let gridSize = 30;

function makeGrid(gridSize) {
  for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
        const div = document.createElement('div') 
        container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
        container.appendChild(div).classList.add('square')
    }
  }
}


makeGrid(gridSize); 