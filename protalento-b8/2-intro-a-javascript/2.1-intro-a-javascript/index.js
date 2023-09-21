/* SALIDAS (informacion para mostrar) */
console.log("El valor de la operacion es:", 2 + 3, 4 > 8);
console.log("El valor de la operacion es: " + (2 + 3) + " gracias...");
document.write("soy un texto que me voy a adicionar al html");
document.write("<p>ahora si soy un buen texto</p>");
alert("Hola soy una ventana emergente simple");

/* ENTRADAS (informacion a recibir) */
const birthday = prompt("Ingresa por favor tu anio de nacimiento");
const age = 2023 - birthday;
console.log("tu edad es:", age);

/* COMENTARIOS */
// control + / comentar y descomentar
// control + k + c comentar
// control + k + u descomentar

// const text = 'soy una variable de una sola linea que va a ser comentada';
/*
linea 1
linea 2
linea 3
linea n
*/

/* VARIABLES */

// tediso
console.log(
  "Yobany Alverto Ingeniero de Software Recidido en el norte del pais"
);
console.log(
  "Yobany Alverto Ingeniero de Software Recidido en el norte del pais"
);
console.log(
  "Yobany Alverto Ingeniero de Software Recidido en el norte del pais"
);
console.log(
  "Yobany Alverto Ingeniero de Software Recidido en el norte del pais"
);
console.log(
  "Yobany Alverto Ingeniero de Software Recidido en el norte del pais"
);
console.log(
  "Yobany Alverto Ingeniero de Software Recidido en el norte del pais"
);

// sencillo
let description =
  "Yobany Alverto Ingeniero de Software Recidido en el norte del pais";
console.log(description);
console.log(description + " hola");
console.log(description);
console.log(description);
console.log(description);
console.log(description);

// Existen 3 formas de declarar variables en JS
var lastname = "trujillo"; // var ya no se utiliza
let pet = "michi";
pet = "pechan";
const city = "Cali";
// city = 'Bogota'; // Error no se puede reasinar un nuevo valor

/* NOMBRAMIENTO DE VARIABLE */
// descriptivas
// recuerden que los nombres deben estar escritos en camelCase
// se obvian las conjunciones ex: Y, De, etc...
let a = 30; // mal!
let myAge = 30; // Bien!

let myName = "Johann";
let n = "Johann"; // super mal!

// aqui defini el nombre de brandon
let brandonFirstName = "  Alexis  ";

let profileImage = "https://url";
let pi = "https://url"; // super mal!

/* TIPOS DE DATOS */
/* number */
let height = 1.73;
let salaryUSD = 5000;
let year = 2023;

// NaN
const luisAge = parseInt("carambas");
const indioAge = Number("changos");
console.log("Edad de Luis", luisAge);
console.log("Edad de Indio", indioAge);

/* booleans */
// buena practica es nombrar los valores booleans con un verbo be, has:
let isUserRegister = false;
let hasInformation = true;

/* null */
let paperRoll = null;

/* undefined */
let someThing;
console.log("some thing: ", someThing);

/* objects */
const car = {
  // key: value,
  windowsNumber: 4,
  brand: "bmw",
  color: "silver",
  capacity: 5,
  cc: 2000,
};

/* OPERACIONES MATEMATICAS */
let result = 5 + 5; // 10
let result2 = 5 - 5; // 0
let result3 = 5 * 5; // 25
let result4 = 5 / 5; // 1
let  result5 = 5 ** 2; // 25
