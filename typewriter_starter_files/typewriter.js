"use strict";

let original = document.querySelector("#typewriter").textContent;
let counter = 0;
const typesound1 = document.querySelector("#typekey1");
const typesound2 = document.querySelector("#typekey2");
const spacesound = document.querySelector("#typespace");
const typelast = document.querySelector("#typelast");
const typereturn = document.querySelector("#typereturn");

function randomTime() {
  return Math.floor(Math.random() * 500 + 1);
}

function randomnumber() {
  return Math.floor(Math.random() * 2 + 1);
}

loop();

function loop() {
  if (counter < original.length + 1) {
    playSound();
    document.querySelector("#typewriter").textContent = original.slice(0, counter);
    counter++;
    setTimeout(loop, randomTime());
  } else {
    setTimeout(repeat(), 2000);
  }
}

function playSound() {
  if (original[counter - 1] === " ") {
    spacesound.play();
  } else if (counter === original.length) {
    typelast.play();
  } else {
    document.querySelector("#typekey" + randomnumber()).play();
  }
}

function repeat() {
  document.querySelector("#typewriter").textContent = "";
  counter = 0;
  typereturn.play();
  setTimeout(loop, 1600);
}
