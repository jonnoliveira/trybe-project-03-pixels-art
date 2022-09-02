// REQUISITO 2 E 3
// PALETA DE CORES
const localPalet = document.getElementById('color-palette');
for (let index = 0; index < 4; index += 1) {
  const divColor = document.createElement('div');
  divColor.className = 'color';
  localPalet.appendChild(divColor);
}

// PRIMEIRA COR
const colorOne = localPalet.firstElementChild;
colorOne.style.backgroundColor = 'black';

// SEGUNDA COR
const colorTwo = localPalet.firstElementChild.nextElementSibling;
colorTwo.style.backgroundColor = 'blue';

// TERCEIRA COR
const colorThree = localPalet.lastElementChild.previousElementSibling;
colorThree.style.backgroundColor = 'yellow';

// QUARTA COR
const colorFour = localPalet.lastElementChild;
colorFour.style.backgroundColor = 'green';

// FUNÇÃO COR ALEATÓRIA
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

// BOTÃO E CORES ALEATÓRIAS
const btnRandom = document.createElement('button');
btnRandom.id = 'button-random-color';
btnRandom.innerText = 'Cores aleatórias';
localPalet.appendChild(btnRandom);

// FUNÇÃO BOTÃO - ALEATORIEDADE DAS CORES
function btnRandomColor() {
  const btn = document.getElementById('button-random-color');
  const divIndex = document.getElementsByClassName('color');
  btn.addEventListener('click', function rColor(colorRandom) {
    for (let index = 1; index < divIndex.length; index += 1) {
      colorRandom = divIndex[index].style.backgroundColor = randomColor();
    }
  });
}

btnRandomColor();

// LOCAL STORAGE PALLETE
function saveColorsPallete() {
  const btn = document.getElementById('button-random-color');
  const divIndex = document.getElementsByClassName('color');
  btn.addEventListener('click', function sColor(colorStorage) {
    colorStorage = [];
    for (let index = 0; index < divIndex.length; index += 1) {
      const object = window.getComputedStyle(divIndex[index], null);
      const styleObj = object.getPropertyValue('background-color');
      colorStorage.push(styleObj);
      localStorage.setItem('colorPalette', JSON.stringify(colorStorage));
    }
  });
  // NÃO FUNCIONOU COM 'FOR' NORMAL NO CYPRESS!
  const memory = JSON.parse(localStorage.getItem('colorPalette'));
  for (let index in memory) {
    divIndex[index].style.backgroundColor = memory[index];
  }
}

saveColorsPallete();

// PIXEL BOARD E COR INICIAL PIXELS
const main = document.getElementById('main');
const sectionBoard = document.createElement('section');
sectionBoard.id = 'pixel-board';
main.appendChild(sectionBoard);

for (let index = 0; index < 5; index += 1) {
  const pixelBoard = document.getElementById('pixel-board');
  const divP = document.createElement('div');
  pixelBoard.appendChild(divP);
  for (let index = 0; index < 5; index += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    pixelBoard.appendChild(divPixel);
  }
}

// PALETA PRETA CLASS SELECTED DEFAULT
const firstPalette = document.getElementsByClassName('color')[0];
firstPalette.classList.add('selected');

// FUNÇÃO SELECIONAR PALETA
function clickSelectorColor() {
  document.querySelectorAll('.color').forEach(function (add) {
    add.addEventListener('click', function (event) {
      const element = event.target;
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      element.classList.add('selected');
    });
  });
}
clickSelectorColor();

// FUNÇÃO PEGAR COR DO PIXEL
document.querySelectorAll('.color').forEach(function (element) {
  element.addEventListener('click', function (event) {
    const pixelColor = event.target;
    const object = window.getComputedStyle(pixelColor, null);
    stylePixel = object.getPropertyValue('background-color');
  });
});

// FUNÇÃO PREENCHER PIXELS COM COR SELECIONADA
function paintColorPixel() {
  document.querySelectorAll('.pixel').forEach(function (element) {
    stylePixel = 'rgb(0,0,0)';
    element.addEventListener('click', function (event) {
      const cor = stylePixel;
      const pixelColor = event.target;
      pixelColor.style.backgroundColor = cor;
    });
  });
}

// BOTÃO CLEAR BOARD
const btnClear = document.createElement('button');
const btnClearPosition = document.getElementById('bottom-clear-position');
btnClear.id = 'clear-board';
btnClear.innerText = 'Limpar';
btnClear.display = 'block';
btnClearPosition.appendChild(btnClear);

// FUNÇÃO BOTÃO - BOARD RETORNA PARA WHITE
function btnClearBoard() {
  const btn = document.getElementById('clear-board');
  const pixelBoardPalettes = document.getElementsByClassName('pixel');
  btn.addEventListener('click', function (whiteBoard) {
    for (let index = 0; index < pixelBoardPalettes.length; index += 1) {
      whiteBoard = pixelBoardPalettes[index].style.backgroundColor = 'white';
    }
  });
}
btnClearBoard();

// FUNÇÃO LOCALSTORAGE PARA DESENHO ATUAL
function saveColorPixels() {
  const pixelBoardPalettes = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBoardPalettes.length; index += 1) {
    const colorStorage = [];
    pixelBoardPalettes[index].addEventListener('click', function () {
      for (let index = 0; index < pixelBoardPalettes.length; index += 1) {
        const object = window.getComputedStyle(pixelBoardPalettes[index], null);
        const styleObj = object.getPropertyValue('background-color');
        colorStorage.push(styleObj);
        localStorage.setItem('pixelBoard', JSON.stringify(colorStorage));
      }
    });
  }
}

// FUNÇÃO BACKUP LOCALSTORAGE PARA DESENHO ATUAL
function backupColorsPixels() {
  const pixelBoardPalettes = document.getElementsByClassName('pixel');
  // NÃO FUNCIONOU COM 'FOR NORMAL' NO CYPRESS!
  const memory = JSON.parse(localStorage.getItem('pixelBoard'));
  for (let index in memory) {
    pixelBoardPalettes[index].style.backgroundColor = memory[index];
  }
}

// INPUT PARA NOVO TAMANHO DE QUADRO PIXELS
// LIMITE BOARD
const inputVqv = document.getElementById('board-size');
let number = 5;
let number2 = 0;
inputVqv.addEventListener('input', function (event) {
  const target = event.target;
  const inputNumber = target.value;
  number = parseInt(inputNumber, 10);
  number2 = parseInt(inputNumber, 10);
  if (number < 5) {
    number = 5;
  } else if (number > 50) {
    number = 50;
  }
  // SALVAR O TAMANHO DO BOARD NO LOCALSTORAGE
  let boardSizeStorage = [];
  boardSizeStorage = number;
  localStorage.setItem('boardSize', JSON.stringify(boardSizeStorage));
});

// FUNÇÃO BOTÃO INPUT VQV
function btnVqv() {
  const btn = document.getElementById('generate-board');
  btn.addEventListener('click', function () {
    const rmvSectPixel = document.getElementById('pixel-board');
    rmvSectPixel.remove();
    const sectionBoard = document.createElement('section');
    sectionBoard.id = 'pixel-board';
    main.appendChild(sectionBoard);
    // VALIDAÇÃO INPUT EM BRANCO
    if (number2 < number) {
      alert('Board inválido!');
      for (let index = 0; index < number; index += 1) {
        // const main = document.getElementById('main')
        const divP = document.createElement('div');
        sectionBoard.appendChild(divP);
        const divPixel = document.createElement('div');
        // CARACTERISTICAS E QUANTIDADES DIV PIXELS
        for (let index = 0; index < number; index += 1) {
          const divPixel = document.createElement('div');
          divPixel.className = 'pixel';
          sectionBoard.appendChild(divPixel);
        }
      }
    } else {
      // CRIAR NOVAS DIVS PIXELS
      for (let index = 0; index < number; index += 1) {
        const divP = document.createElement('div');
        sectionBoard.appendChild(divP);
        // CARACTERISTICAS E QUANTIDADES DIV PIXELS
        for (let index = 0; index < number; index += 1) {
          const divPixel = document.createElement('div');
          divPixel.className = 'pixel';
          sectionBoard.appendChild(divPixel);
        }
      }
    }
    paintColorPixel();
    saveColorPixels();
  });
}
btnVqv();

// FUNÇÃO NEW BOARD LOCAL STORAGE
// IMPRIMIR NOVO BOARD
function newBoardSize() {
  const numberMemory = JSON.parse(localStorage.getItem('boardSize'));
  if (numberMemory > number) {
    const main = document.getElementById('main');
    const rmvSectPixel = document.getElementById('pixel-board');
    rmvSectPixel.remove();
    const sectionBoard = document.createElement('section');
    sectionBoard.id = 'pixel-board';
    main.appendChild(sectionBoard);
    for (let index = 0; index < numberMemory; index += 1) {
      const pixelBoard = document.getElementById('pixel-board');
      const divP = document.createElement('div');
      pixelBoard.appendChild(divP);
      for (let index = 0; index < numberMemory; index += 1) {
        const divPixel = document.createElement('div');
        divPixel.className = 'pixel';
        pixelBoard.appendChild(divPixel);
      }
    }
  }
  paintColorPixel();
  saveColorPixels();
}
newBoardSize();
saveColorPixels();
backupColorsPixels();
