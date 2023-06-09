const age = Number(prompt("Cual es tu edad?")); // si el usuario no escribe un numero, age sería NaN
const residence = prompt("Resides en un municipio fronterizo del pais?");

const isAdult = age >= 18; // Nan >= 18 es NaN, por lo que isAdult seria false
const isLocateNorthFrontier = residence.toUpperCase() === "SI"; // toUpperCase() - toLowerCase()

// > =
if (isAdult && isLocateNorthFrontier) {
  document.write("tranquilo te puedes vacunar");
  console.log("tranquilo te puedes vacunar");
} else {
  document.write("lo siento, no te puedes vacunar, largo!");
  console.log("lo siento, no te puedes vacunar, largo!");
}
