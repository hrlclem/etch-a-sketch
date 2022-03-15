const container = document.querySelector(".container");
const blackBtn = document.querySelector(".black");
const clearBtn = document.querySelector(".clear");
const eraseBtn = document.querySelector(".erase");
const colorsBtn = document.querySelector(".colors");

// Running it
let gridSize = 16;
makeGrid(gridSize); 
blackColor();
eraseAction();
clearAction();
const square = container.querySelectorAll('.square');





// Create of X * X
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

// Change color to black
function blackColor() {
  blackBtn.addEventListener('click', () => {
    square.forEach(square => square.addEventListener('mouseover', () => {
      square.style.background = 'black'; 
    }))
  })
}

// Change color to white
function eraseAction() {
  eraseBtn.addEventListener('click', () => {
    square.forEach(square => square.addEventListener('mouseover', () => {
      square.style.background = 'white'; 
    }))
  })
}

// Clear whole grid and ask for size
function clearAction() {

}
