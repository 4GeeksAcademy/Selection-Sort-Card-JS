/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let palos = ["♦", "♥", "♠", "♣"];
let cartasDesordenadas = [];
console.log("Cuantas cartas quiere:", cartasDesordenadas);
let botónDraw = document.querySelector("#draw");

/* captura el valor pasado por el input */
function generaInputCartas() {
  cartasDesordenadas = [];
  let inputNumber = document.querySelector("#input-number");
  let inputNumberValue = inputNumber.value;
  console.log("Input pasado", inputNumberValue, "cartas");

  for (let i = 1; i <= inputNumberValue; i++) {
    cartasDesordenadas.push(generarCartas());
  }

  console.log("cartas repartidas:", cartasDesordenadas);
  return cartasDesordenadas;
}

let drawDesactivado = function() {
  this.disabled = true;
};
botónDraw.addEventListener("click", drawDesactivado, false);

/* Dibuja las cartas */
function generarCartas() {
  let mostrarCartas = document.querySelector("#mostrar-cartas");
  let carta = document.createElement("div");
  carta.classList.add("card");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let paloSuperior = document.createElement("div");
  paloSuperior.classList.add("position-absolute", "top-0", "start-0");
  let palosRandom = Math.floor(Math.random() * palos.length);
  let palo = palos[palosRandom];
  paloSuperior.innerHTML = palo;

  let numberCentral = document.createElement("div");
  let numberRandom = Math.floor(Math.random() * numbers.length);
  let number = numbers[numberRandom];
  numberCentral.innerHTML = changeValiu(number);

  let paloInferior = document.createElement("div");
  paloInferior.classList.add("position-absolute", "bottom-0", "end-0");
  paloInferior.innerHTML = palo;

  mostrarCartas.appendChild(carta);
  carta.appendChild(cardBody);
  cardBody.appendChild(paloSuperior);
  cardBody.appendChild(numberCentral);
  cardBody.appendChild(paloInferior);

  let objetoCarta = {
    palo: palo,
    number: number
  };

  if (palo == "♦" || palo == "♥") {
    paloSuperior.style.color = "red";
    paloInferior.style.color = "red";
    numberCentral.style.color = "red";
  } else {
    paloSuperior.style.color = "black";
    paloInferior.style.color = "black";
    numberCentral.style.color = "black";
  }
  return objetoCarta;
}

botónDraw.addEventListener("click", generaInputCartas);

function changeValiu(value) {
  switch (value) {
    case 1:
      return "A";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";

    default:
      return value;
  }
}

let botonSort = document.querySelector("#sort");
console.log("BOTÓN", botonSort);

function selectionSort() {
  const len = cartasDesordenadas.length; /* len es la longitud de cartas a recorrer en el primer ciclo for */
  console.log("Cantidad de cartas a ordenar:", len);
  for (let i = 0; i < len - 1; i++) {
    let min = i; /* en este momento es todas las posiciones de mi array de cartas repartido. Por tanto inicio mi ciclo desde el primer elemento*/
    console.log("Antes del for 2 como min valgo", min);
    for (let j = i + 1; j < len; j++) { /* i + 1 por que mi primer elemento en este momento ya fué seleccionado en el primer for independientemente de su valor, simplemnte prevalece la posición. Por lo tanto,se va a comparar con el resto */
      if (cartasDesordenadas[j].number < cartasDesordenadas[min].number) {/*  Además de reccorrer el tamaño accedo a los valores de las cartas por posición en el array y comparar si en el recorrido en una posición segín valor es menor que el último valor almacenado en la min. En el select comparo hasta el último elemento con lo que se va almacenando en la min*/
        min = j;/* min va a valer lo que esté en la posición j de menor a mayor */
      }
    }
    console.log("luego del for 2 como min valgo", min);
    if (min !== i) {
      const temp = cartasDesordenadas[i];
      cartasDesordenadas[i] = cartasDesordenadas[min];
      cartasDesordenadas[min] = temp;
    }
  }
  console.log("cartas ordenadas:", cartasDesordenadas);
}

botonSort.addEventListener("click", selectionSort);
