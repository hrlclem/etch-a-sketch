const container = document.querySelector(".container");
const blackBtn = document.querySelector(".black");
const clearBtn = document.querySelector(".clear");
const eraseBtn = document.querySelector(".erase");
const colorsBtn = document.querySelector(".colors");

// Running it
let gridSize = 80;
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;




createGrid(gridSize)
const square = container.querySelectorAll('.square');
blackColor();
eraseAction();
rainbowColor();




// Create board game
function createGrid() {
  for(let i = 0; i < gridSize**2; i++) {
    const div = document.createElement('div') 
    div.style.border = '0.5px solid grey';
    div.style.backgroundColor = 'white';
    container.insertAdjacentElement("beforeend", div);
    div.classList.add('square');
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

// Change color to rainbow
function rainbowColor() {
  colorsBtn.addEventListener('click', () => {
    square.forEach(square => square.addEventListener('mouseover', () => {
      square.style.background = `hsl(${Math.random() * 360}, 100%, 50%`; 
    }))
  })
}

// Clear whole grid and ask for size
function clearAction() {
  square.forEach(square => square.style.background = 'white')
}

