const container = document.querySelector("#container");
for (let i = 0; i < 255; i++) {
  let div = document.createElement("div");
  div.style.width = "27.8px";
  div.style.height = "27.8px";
  div.style.border = "1px solid black";
  container.appendChild(div);
}
