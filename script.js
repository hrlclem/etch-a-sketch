const container = document.getElementById("container");

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('square');
    container.appendChild(newDiv);

    for (let j = 0; j < size; j++) {
      newDiv.classList.add('square');
      container.appendChild(newDiv);
    }
  }
};

makeGrid(16);