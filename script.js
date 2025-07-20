const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.style.width = "31.25px";
  div.style.height = "31.25px";
  div.className = "square";
  container.appendChild(div);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomExclusiveMax = getRandomInt(0, 10);
console.log(randomExclusiveMax); // e.g., 4
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
