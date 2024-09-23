import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Escribe tu código aquí

  let NumberCard = document.querySelector("#Number");
  let randomItem = document.querySelector("#figura1");
  let randomObjet = document.querySelector("#figura2");

  NumberCard.innerHTML = generateNumber();

  let figura = itemGenerate();
  randomItem.innerHTML = figura;
  randomObjet.innerHTML = figura;

  // Asignar clase para cambiar color si es corazón o diamante
  if (figura === "♥" || figura === "♦") {
    randomItem.classList.add("red");
    randomObjet.classList.add("red");
  } else {
    randomItem.classList.remove("red");
    randomObjet.classList.remove("red");
  }
};

function generateNumber() {
  let random = Math.floor(Math.random() * 13) + 1;

  switch (random) {
    case 1:
      return "A";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return random;
  }
}

function itemGenerate() {
  let item = Math.floor(Math.random() * 4); // Cambiado de 3 a 4 para incluir el 3

  switch (item) {
    case 0:
      return "♣";
    case 1:
      return "♠";
    case 2:
      return "♥";
    case 3:
      return "♦";
    default:
      return "♣"; // Valor por defecto
  }
}
