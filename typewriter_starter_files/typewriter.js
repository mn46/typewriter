"use strict";

// let original = document.querySelector("#typewriter").textContent;
// let counter = 0;
// let animated;

// loop();

// function loop() {
//   if (counter < original.length) {
//     animated = original.slice(0, counter);
//     document.querySelector("#animated").textContent = animated;
//     counter++;
//   }
//   setTimeout(loop, 500);
// }

let original = document.querySelector("#typewriter").textContent;
let counter = 0;

loop();

function loop() {
  if (counter < original.length) {
    document.querySelector("#typewriter").textContent = original.slice(0, counter);
    counter++;
    setTimeout(loop, 500);
  }
}
