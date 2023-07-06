// correr con el comando: node nombre-archivo.js

// MODULOS
// importacion
const show = require("./print.js");

show.print("Hola mundo x4");
console.log(show.message);

console.log(show);

// NPM (Node Package Manager)
// npm init
// npm init -y
// npm install nombre-biblioteca

const _ = require('lodash');

// const numbers = [1, 2, 3, 4, 5];
const numbers = {
    first: 1,
    second: 8,
    third: 10
}

const squaredNumbers = _.map(numbers, n => n * n);

console.log(squaredNumbers);

// Modos de trabajo de NPM
// 1. a nivel de proyecto
// 2. a nivel global: -g

// npm install -g nombre-biblioteca
// npm install -g nodemon

// npm run nombre-script
