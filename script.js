const container = document.querySelector(".container");
const blackBtn = document.querySelector(".black");
const clearBtn = document.querySelector(".clear");
const eraseBtn = document.querySelector(".erase");
const colorsBtn = document.querySelector(".colors");
const submitBtn = document.querySelector(".submit");
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');




// Running it
let gridSize = 10;
let slideAmount = gridSize;

createGrid(gridSize);
let square = container.querySelectorAll('.square');
blackColor();
eraseAction();
rainbowColor();



// Create board game
function createGrid() {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for(let i = 0; i < gridSize**2; i++) {
    const square = document.createElement('div') 
    square.style.border = '0.5px solid lightgray';
    square.style.backgroundColor = 'white';
    container.insertAdjacentElement("beforeend", square);
    square.classList.add('square');
  }
}

// Reset boardgame
function resetGridSize() { 
  container.innerHTML = "";
  createGrid(slideAmount);
}

// Change color to black
function blackColor() {
  blackBtn.addEventListener('click', () => {
    square = container.querySelectorAll('.square');
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

// Open modal: clear whole grid and ask for size
open.addEventListener('click', () => {
  square.forEach(square => square.style.background = 'white');
  modal_container.classList.add('show');
});

// Modal area: show gridSize value
var sliderDiv = document.getElementById("sliderAmount");
sliderDiv.innerHTML = gridSize;
document.getElementById("myRange").value = gridSize;


// Modal area: update slider value
function updateSlider(slideAmount) {
  sliderDiv = document.getElementById("sliderAmount");
  sliderDiv.innerHTML = slideAmount;
  gridSize = slideAmount;
}

// Close modal
close.addEventListener('click', () => {
  resetGridSize();
  modal_container.classList.remove('show');
  square.forEach(square => square.addEventListener('mouseover', () => {
    square.style.background = 'white'; 
  }))
});