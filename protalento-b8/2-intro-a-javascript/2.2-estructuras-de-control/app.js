// convertir string a numero: parseInt() - parseFloat() - Number()
const age = Number(prompt("Cual es tu edad?")); // si el usuario no escribe un numero, age sería NaN
const residence = prompt("Resides en un municipio fronterizo del pais?");
console.log({ age });

// > = : >=
const isAdult = age >= 18; // Nan >= 18 es NaN, por lo que isAdult seria false porque NaN es falsy
const isLocateNorthFrontier = residence?.toLowerCase() === "si"; // toUpperCase() - toLowerCase()

// Operador logico And (&&)
if (isAdult && isLocateNorthFrontier) {
  const name = prompt('cual es tu nombre?');
  document.write("Te vamos a vacunar asi que no corras!");
  console.log("Te vamos a vacunar asi que no corras!");
} else {
  document.write("lo siento, no te puedes vacunar, largo!");
  console.log("lo siento, no te puedes vacunar, largo!");
}
