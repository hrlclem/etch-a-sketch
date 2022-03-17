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
let gridSize = 16;
let slideAmount;
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

createGrid(gridSize)
const square = container.querySelectorAll('.square');
blackColor();
eraseAction();
rainbowColor();


// Slider gridSize amount choice
function updateSlider(slideAmount) {
  var sliderDiv = document.getElementById("sliderAmount");
  sliderDiv.innerHTML = slideAmount;
  return slideAmount;
}


// Change gridSize amount
function gridSizeChange() {
  submitBtn.addEventListener('click', () => {
    console.log(gridsize);
  })
}





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
open.addEventListener('click', () => {
  square.forEach(square => square.style.background = 'white');
  modal_container.classList.add('show');
});


// Close modal
close.addEventListener('click', () => {
  modal_container.classList.remove('show');
  square.forEach(square => square.addEventListener('mouseover', () => {
    square.style.background = 'white'; 
  }))
});