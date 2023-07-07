console.log("Hello World 2 loquesea");
//lodash

// instalar dependencia a nivel de proyecto
// npm install [nombre-paquete]
// npm i [nombre-paquete]

// instalar una dependencia a nivel global
// npm i -g [nombre-paquete]

// siempre que tengan dependencias instaladas
// y se cree la carpeta node_modules
// deben crear el archivo .gitignore
// y adicionar a este la carpeta node_modules

// eliminar dependencia
// npm uninstall [nombre-paquete]

// actualizar dependencia a nivel de minor
// npm update [nombre-paquete]

// const _ = require('lodash'); // commonjs
import _ from "lodash";

const numbers = [1, 2, 3, 4, 5];
// const numbers = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
// };

const squaredNumbers = _.map(numbers, 
    (number, key) => key + number);

console.log(squaredNumbers);

// EJERCICIOS
// 1: Filtrar numeros pares de un arreglo
// https://lodash.com/docs/4.17.15#filter

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2: Calcular la suma de un arreglo de números
// https://lodash.com/docs/4.17.15#sum
const numbers3 = [5, 10, 15, 20];

// 3: Convertir un texto a formato de título
// https://lodash.com/docs/4.17.15#startCase
const text = 'este es un ejemplo de texto';
