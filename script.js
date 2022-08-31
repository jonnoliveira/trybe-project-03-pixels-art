////REQUISITO 2 E 3
//// PALETA DE CORES

let localPalet = document.getElementById("color-palette");
for (let index = 0; index < 4; index += 1) {
  let divColor = document.createElement("div");
  divColor.className = "color";
  divColor.style.border = "1px solid black";
  divColor.style.width = "20px";
  divColor.style.height = "20px";
  divColor.style.margin = "5px";
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

//// FUNÇÃO COR ALEATÓRIA

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

//// BOTÃO E CORES ALEATÓRIAS

let button = document.createElement("button");
button.id = "button-random-color";
button.innerText = "Cores aleatórias";
localPalet.appendChild(button);

//// FUNÇÃO BOTÃO - ALEATORIEDADE DAS CORES


function btnRandomColor() {
  let btn = document.getElementById("button-random-color");
  let divIndex = document.getElementsByClassName("color");
  btn.addEventListener("click", function (colorRandom) {
    for (index = 1; index < divIndex.length; index += 1) {
      divIndex[index].style.backgroundColor = randomColor();
    };
  });
}

btnRandomColor();
