"use strict";

let original = document.querySelector("#typewriter").textContent;
let counter = 0;
const typesound1 = document.querySelector("#typekey1");
// let randomSound = Math.floor(Math.random() * 2);

loop();

function loop() {
  if (counter < original.length) {
    document.querySelector("#typewriter").textContent = original.slice(0, counter);
    counter++;
    playSound();
    setTimeout(loop, 500);
  }
}

function playSound() {
  typesound1.play();
}
