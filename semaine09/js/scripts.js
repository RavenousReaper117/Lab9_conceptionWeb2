/*Référence de la librairie : https://codepen.io/s0wcy/pen/WVbzKB?editors=0110 */

const h1 = document.querySelector("h1");

// Sélectionne le h1 du header et sépare ses lettres
let split = new SplitText("header h1", { type: "chars" });

// Ajoute une classe spéciale aux dernières lettres de chaque mot
split.chars.forEach((char, index, array) => {
    let nextChar = array[index + 1];
    if (!nextChar || nextChar.textContent === " ") {
        char.classList.add("last-letter");
    }
})