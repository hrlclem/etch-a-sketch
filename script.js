const container = document.querySelector(".container");
const square = document.querySelector(".square");


let gridSize = 16;
makeGrid(gridSize); 

square.addEventListener("mouseover", function() {
  square.style.backgroundColor = "green";
})






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



