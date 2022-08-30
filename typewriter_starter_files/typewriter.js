"use strict";

let original = document.querySelector("#typewriter").textContent;
let counter = 0;
const typesound1 = document.querySelector("#typekey1");
const typesound2 = document.querySelector("#typekey2");
const spacesound = document.querySelector("#typespace");
const typelast = document.querySelector("#typelast");
const typereturn = document.querySelector("#typereturn");
// let randomSound = Math.floor(Math.random() * 2);

loop();

function loop() {
  if (counter <= original.length) {
    playSound();
    document.querySelector("#typewriter").textContent = original.slice(0, counter);
    counter++;
    setTimeout(loop, 1500);
    console.log(counter);
  }
}

function playSound() {
  if (original[counter - 1] === " ") {
    spacesound.play();
    console.log(counter);
  } else {
    typesound1.play();
  }
}
