/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

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
      random = "A";
      break;
    case 11:
      random = "J";
      break;
    case 12:
      random = "Q";
      break;
    case 13:
      random = "K";
      break;
  }

  return random;
}

function itemGenerate() {
  let item = Math.floor(Math.random() * 3);

  switch (item) {
    case 0:
      item = "♣";
      break;
    case 1:
      item = "♠";
      break;
    case 2:
      item = "♥";
      break;
    case 3:
      item = "♦";
      break;
  }

  return item;
}
