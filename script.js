////  REQUISITO 2 E 3
////  PALETA DE CORES

const localPalet = document.getElementById('color-palette');
for (let index = 0; index < 4; index += 1) {
  const divColor = document.createElement('div');
  divColor.className = 'color';
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

let btnRandom = document.createElement("button");
btnRandom.id = "button-random-color";
btnRandom.innerText = "Cores aleatórias";
localPalet.appendChild(btnRandom);

// //// FUNÇÃO BOTÃO - ALEATORIEDADE DAS CORES

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

// ///// LOCAL STORAGE PALLETE

function saveColorsPallete() {
  let btn = document.getElementById("button-random-color");
  let divIndex = document.getElementsByClassName("color");
  btn.addEventListener("click", function (colorRandom) {
    let colorStorage = [];
    /// PARA CADA INDICE PRESENTE (CADA DIV QUE RECEBE A COR);
    for (index = 0; index < divIndex.length; index += 1) {
      /// ARMAZENO TODAS INFORMAÇÕES DE ESTILO DA DIV[INDEX] >> object; (MDN)
      const object = window.getComputedStyle(divIndex[index], null);
      /// SEPARO A PROPRIEDADE DE ESTILO QUE ME INTERESSA (background-color) E ARMAZENO NO >> styleObj;
      const styleObj = object.getPropertyValue("background-color");
      /// ARMAZENO AS INFORMAÇÕES DAS CORES DO BG (RGB) NO >> colorStorage;
      colorStorage.push(styleObj);
      /// ARMAZENO AS INFORMAÇÕES DAS CORES NO >> localStorage, PASSANDO A CHAVE;
      localStorage.setItem("colorPalette", JSON.stringify(colorStorage));
    }
  });
  /// TRASFORMO A INFO ARMAZENADA
  let memory = JSON.parse(localStorage.getItem("colorPalette"));
  /// PARA CADA INDICE PRESENTE (CADA DIV QUE RECEBE A COR);
  for (index in memory) {
    /// MUDO A COR ORIGINAL PARA AS CORES ARMAZENADAS;
    divIndex[index].style.backgroundColor = memory[index];
  }
}

saveColorsPallete();

// // ///// PIXEL BOARD E COR INICIAL PIXELS

let main = document.getElementById('main');
let sectionBoard = document.createElement('section');
sectionBoard.id = 'pixel-board'
main.appendChild(sectionBoard);

for (let index = 0; index < 5; index += 1) {
  let pixelBoard = document.getElementById('pixel-board');
  let divP = document.createElement('div');
  pixelBoard.appendChild(divP);
  for (let index = 0; index < 5; index += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divPixel.style.border = '1px solid black';
    divPixel.style.width = '40px';
    divPixel.style.margin = '1px';
    divPixel.style.height = '40px';
    divPixel.style.display = 'inline-block';
    divPixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(divPixel);
  };
}

// ///// PALETA PRETA CLASS SELECTED DEFAULT

let firstPalette = document.getElementsByClassName("color")[0];
firstPalette.classList.add("selected");

// ///// FUNÇÃO SELECIONAR PALETA 

function clickSelectorColor() {
  ///SELECIONA TODAS DIVS DAS CORES INICIAIS E ADD EVENTO PRA ELAS
  document.querySelectorAll(".color").forEach(function (add) {
    add.addEventListener("click", function (event) {
      ///SELECIONA O ELEMENTO QUE VAI RECEBER O EVENTO E CAPTURA
      let element = event.target;
      ///SELECIONA O ELEMENTO QUE CONTEM A CLASSE REQUERIDA E EXCLUI
      let selectedColor = document.querySelector(".selected");
      selectedColor.classList.remove("selected");
      ///ADICIONA A CLASSE A UM UNICO ELEMENTO
      element.classList.add("selected");
    });
  });
};

clickSelectorColor();

// ///// FUNÇÃO PEGAR COR DO PIXEL 

document.querySelectorAll(".color").forEach(function (element) {
  element.addEventListener("click", function (event) {
    let pixelColor = event.target;
    let object = window.getComputedStyle(pixelColor, null);
    stylePixel = object.getPropertyValue("background-color");
  });
});

// ///// FUNÇÃO PREENCHER PIXELS COM COR SELECIONADA

function paintColorPixel() {
  document.querySelectorAll(".pixel").forEach(function (element) {
    stylePixel = 'rgb(0,0,0)';
    element.addEventListener("click", function (event) {
      let cor = stylePixel;
      let pixelColor = event.target;
      pixelColor.style.backgroundColor = cor;
    });
  });
}

// paintColorPixel();

// ///// BOTÃO CLEAR BOARD

let btnClear = document.createElement('button');
let btnClearPosition = document.getElementById('bottom-clear-position');
btnClear.id = 'clear-board';
btnClear.innerText = 'Limpar';
btnClear.display = 'block';
btnClearPosition.appendChild(btnClear);

///// FUNÇÃO BOTÃO - BOARD RETORNA PARA WHITE

function btnClearBoard() {
  let btn = document.getElementById('clear-board');
  let pixelBoardPalettes = document.getElementsByClassName('pixel');
  btn.addEventListener("click", function (whiteBoard) {
    for (let index = 0; index < pixelBoardPalettes.length; index += 1) {
      pixelBoardPalettes[index].style.backgroundColor = 'white';
    }
  });
}

btnClearBoard()

///// FUNÇÃO LOCALSTORAGE PARA DESENHO ATUAL

function saveColorPixels() {
  let pixelBoardPalettes = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBoardPalettes.length; index += 1) {
    let colorStorage = [];
    pixelBoardPalettes[index].addEventListener("click", function (saveColor) {
      for (let index = 0; index < pixelBoardPalettes.length; index += 1) {
        const object = window.getComputedStyle(pixelBoardPalettes[index], null);
        const styleObj = object.getPropertyValue("background-color");
        colorStorage.push(styleObj);
        localStorage.setItem("pixelBoard", JSON.stringify(colorStorage));
      }
    })
  }
}

// saveColorPixels();

///// FUNÇÃO BACKUP LOCALSTORAGE PARA DESENHO ATUAL

function backupColorsPixels() {
  let pixelBoardPalettes = document.getElementsByClassName('pixel');
  let memory = JSON.parse(localStorage.getItem("pixelBoard"));
  for (index in memory) {
    pixelBoardPalettes[index].style.backgroundColor = memory[index];
  }
}



///// INPUT PARA NOVO TAMANHO DE QUADRO PIXELS
///// LIMITE BOARD

let inputVqv = document.getElementById('board-size');
let number = 5;
let number2 = 0;
inputVqv.addEventListener("input", function (event) {
  let target = event.target;
  let inputNumber = target.value;
  number = parseInt(inputNumber);
  number2 = parseInt(inputNumber);
  if (number < 5) {
    number = 5;
  } else if (number > 50) {
    number = 50;
  }
  ///SALVAR O TAMANHO DO BOARD NO LOCALSTORAGE
  let boardSizeStorage = [];
  boardSizeStorage = number;
  localStorage.setItem("boardSize", JSON.stringify(boardSizeStorage));
})

///// FUNÇÃO BOTÃO INPUT VQV

function btnVqv() {
  let btn = document.getElementById('generate-board');
  btn.addEventListener("click", function (copyNumber) {
    let rmvSectPixel = document.getElementById('pixel-board');
    rmvSectPixel.remove();
    copyNumber = number;
    let sectionBoard = document.createElement('section');
    sectionBoard.id = 'pixel-board'
    main.appendChild(sectionBoard);

    /// VALIDAÇÃO INPUT EM BRANCO
    if (number2 < number) {
      alert('Board inválido!');
      for (let index = 0; index < number; index += 1) {
        let divP = document.createElement('div');
        sectionBoard.appendChild(divP);
        const divPixel = document.createElement('div');
        /// CARACTERISTICAS E QUANTIDADES DIV PIXELS
        for (let index = 0; index < number; index += 1) {
          let divPixel = document.createElement("div");
          divPixel.className = "pixel";
          divPixel.style.border = "1px solid black";
          divPixel.style.width = "40px";
          divPixel.style.margin = "1px";
          divPixel.style.height = "40px";
          divPixel.style.display = "inline-block";
          divPixel.style.backgroundColor = "white";
          sectionBoard.appendChild(divPixel);
        }
      }
    } else {
      /// CRIAR NOVAS DIVS PIXELS
      for (let index = 0; index < number; index += 1) {
        let divP = document.createElement('div');
        sectionBoard.appendChild(divP);
        const divPixel = document.createElement('div');
        /// CARACTERISTICAS E QUANTIDADES DIV PIXELS
        for (let index = 0; index < number; index += 1) {
          let divPixel = document.createElement("div");
          divPixel.className = "pixel";
          divPixel.style.border = "1px solid black";
          divPixel.style.width = "40px";
          divPixel.style.margin = "1px";
          divPixel.style.height = "40px";
          divPixel.style.display = "inline-block";
          divPixel.style.backgroundColor = "white";
          sectionBoard.appendChild(divPixel);
        }
      }
    }
    paintColorPixel();
  })
}
btnVqv();

///// FUNÇÃO NEW BOARD LOCAL STORAGE

/// IMPRIMIR NOVO BOARD

function newBoardSize() {
  const numberMemory = JSON.parse(localStorage.getItem("boardSize"));
  if (numberMemory > number) {
    let main = document.getElementById('main');
    let rmvSectPixel = document.getElementById('pixel-board');
    rmvSectPixel.remove();
    let sectionBoard = document.createElement('section');
    sectionBoard.id = 'pixel-board';
    main.appendChild(sectionBoard);

    for (let index = 0; index < numberMemory; index += 1) {
      let pixelBoard = document.getElementById('pixel-board');
      let divP = document.createElement('div');
      pixelBoard.appendChild(divP);
      for (let index = 0; index < numberMemory; index += 1) {
        let divPixel = document.createElement('div');
        divPixel.className = 'pixel';
        divPixel.style.border = '1px solid black';
        divPixel.style.width = '40px';
        divPixel.style.margin = '1px';
        divPixel.style.height = '40px';
        divPixel.style.display = 'inline-block';
        divPixel.style.backgroundColor = 'white';
        pixelBoard.appendChild(divPixel);

      };
    }
  }
  paintColorPixel();
  saveColorPixels();
}
newBoardSize();
saveColorPixels();
backupColorsPixels();


// localStorage.removeItem('pixelBoard');
