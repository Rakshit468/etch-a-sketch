const container = document.querySelector("#container");

const createGrid = (size) => {
  if (document.querySelectorAll(".square").length > 0) {
    document.querySelectorAll(".square").forEach((square) => square.remove());
  }
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.style.width = `${1000 / size}px`;
    div.style.height = `${1000 / size}px`;
    div.className = "square";
    container.appendChild(div);
  }
  const squares = document.querySelectorAll(".square");
  console.log(squares.length);

  squares.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = `rgb(${getRandomInt(
        0,
        256
      )} ${getRandomInt(0, 256)} ${getRandomInt(0, 256)})`;
    });
  });
};

createGrid(20);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const btn = document.querySelector("#new");

btn.addEventListener("click", () => {
  try {
    let gridDim = prompt(
      "Enter the number of rows of the grid between 20 - 100"
    );
    if (gridDim < 20 || gridDim > 100 || gridDim == "") {
      alert("Invalid input! Please enter a valid value ;)");
    } else {
      createGrid(gridDim);
    }
  } catch (error) {
    console.log(error);
  }
});
