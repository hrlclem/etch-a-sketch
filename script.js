const container = document.querySelector(".container");
const blackBtn = document.querySelector(".black");
const clearBtn = document.querySelector(".clear");
const colorsBtn = document.querySelector(".colors");





let gridSize = 16;
makeGrid(gridSize); 
blackColor();



function makeGrid(gridSize) {
  for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
        const div = document.createElement('div') 
        div.style.border = '1px solid black';
        container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
        container.appendChild(div).classList.add('square')
    }
  }
}

function blackColor() {
  const square = container.querySelectorAll('.square');
  blackBtn.addEventListener('click', () => {
    square.forEach(square => square.addEventListener('mouseover', () => {
      square.style.background = 'black'; 
    }))
  })
}