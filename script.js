const container = document.getElementById("container");

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    const div = document.createElement("div");
    div.classList.add('square');
    container.appendChild(square);

    for (let j=0;j < size; j++) {
      div.classList.add('square');
      container.appendChild(square);
    }
  }
};

makeGrid(16);