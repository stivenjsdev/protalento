//Sentencias
// function logger() {
//     console.log(2);
//     second();
//     console.log(3);
// }

//Expresion
// const logger = function () {
//     console.log(2);
//     second();
//     console.log(3);
// }

//Funcion Flecha
const logger = () => {
    console.log(2);
    second();
    console.log(3);
}

const callback = () => {
    console.log('callback')
}

let data = {};
function second() {
    setTimeout(() => {
        data = {user: 'Yaxche'};
    }, 0);
}



console.log('inicio');
logger();
console.log(data);
console.log(1);

//inicio
//loger -> 2
//logger -> 3
// 1
//      second() -> second

