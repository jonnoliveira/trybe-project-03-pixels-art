//// PALETA DE CORES

let localPalet = document.getElementById("color-palette");
for (let index = 0; index < 4; index += 1) {
  let divColor = document.createElement("div");
  divColor.className = "color";
  divColor.style.border = "1px solid black";
  divColor.style.width = "20px";
  divColor.style.height = "20px";
  divColor.style.display = "inline-block"
  localPalet.appendChild(divColor);
}
//// PRIMEIRA COR
let colorOne = localPalet.firstElementChild;
colorOne.style.backgroundColor = "black";

//// SEGUNDA COR
let colorTwo = localPalet.firstElementChild.nextElementSibling;
colorTwo.style.backgroundColor = "blue";

//// TERCEIRA COR
let colorThree = localPalet.lastElementChild.previousElementSibling;
colorThree.style.backgroundColor = "yellow";

//// QUARTA COR
let colorFour = localPalet.lastElementChild;
colorFour.style.backgroundColor = "green";

