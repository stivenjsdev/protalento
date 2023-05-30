/* las salidas (para ver información) */
console.log('hola soy el segundo script', 'hola 2');
document.write('hola mundo');
alert('hola soy una ventana emergente simple');

/* las entradas (para recibir informacion) */
var edad = prompt('cual es tu edad');
// edad = parseInt(edad) + 2;

document.write('<br>tienes ', edad, ' anios')

/* Comentarios */
// utilizando solo los // comentarios de una sola linea
/* 
linea 1
linea 2
*/

/* Variables */
// declaracion - asignacion
var apellido = 'Hernandez sadfdsafdsafsad';

console.log('Hernandez sadfdsafdsafsad')
console.log('Hernandez sadfdsafdsafsad')
console.log('Hernandez sadfdsafdsafsad')
console.log('Hernandez sadfdsafdsafsad')
console.log('Hernandez sadfdsafdsafsad')

console.log(apellido)
console.log(apellido)
console.log(apellido)
console.log(apellido)
console.log(apellido)
console.log(apellido)

// existen 3 formas de declarar variables en javascript
var nombre = 'stiven'; // var ya no se utiliza ni por el berraco xD
let mascota = 'michi';
const ciudad = 'cali';

// pueden cambiar, varian
nombre = 'Camilo';
mascota = 'mordelon';
//ciudad = 'bogota'; // es un error!!

/* Nombramiento de variables */
// descriptivas
// edad: llamemoslo edad, y no e, ed
let edad3;
let age;
// imagen de perfil: imagenPerfil, ip, i, imgP
let imagenPerfilUsuario; // camel case
let userProfileImage;
// nombre de cliente
let nombreCliente;
// tipo de musica de usuario
let tipoMusicaUsuario;
let typeUserMusic;
// id de usuario
let userId;

// Alvaro nos dijo una vez "soy un buen alumno"
let message = 'Alvaro nos dijo una vez "soy un buen alumno"'

/* Tipos de Datos */
/* Numeros */
let edad2 = 'asdfasdf'

edad2 = parseInt(edad2);
// NaN es un numero! esta en el tipo de numeros

console.log("edad: ", edad2);
console.log(typeof edad2)

/* Booleanos */
let areFull = true; // nombramiento de variables booleanas
let hasInformation = false;
let isRegister = true;

/* Null */
let paperRoll = null;
console.log(paperRoll);

/* Undefined */
// declaracion     asignacion
let someThing;
console.log(someThing);

paperRoll = undefined; // directamente definirle el valor de indefinido

/* Objetos */
let person = {
  age: 30,
  name: 'Stiven',
  direction: {
    country: 'colombia',
    city: 'cali',
    direction: 'CR 89 - 132'
  },
}

/* Operaciones Matematicas */
let result = 5 + 10;
let result2 = 5 - 10;
let result3 = 5 * 10;

console.log(result) // output: 15