// shorthands
// clg
// log
console.log("hola");

// sintaxis de if
const question = prompt("tienes hambre?");
const isYes = question.toUpperCase() === "SI"; // recuerden que es triple =
// const isYes = question.toLowerCase() === 'si';

if (isYes) {
  document.write("Pide un domicilio");
} else {
  document.write("Ponte a trabajar!");
}
