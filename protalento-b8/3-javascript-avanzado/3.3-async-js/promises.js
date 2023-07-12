/*
PROMESAS
se implementan desde ES6 osea ECMAScript 2015

1. Se crean con el constructor Promise
const miPromesa = new Promise((resolve, reject) => {
    if( la operacion fue exitosa) {
        resolve('resultados de la operacion exitosa');
    } else {
        reject(Error('la operacion falló'));
    }
});

2. Se utilizan los metodos .then, .catch y .finally para
manejar el resultado de la operacion asincrona

miPromesa
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
    .finally(() => {
        console.log('operacion finalizada, con exito o error'); // siempre se va a ejectura.
    })
*/

const request = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const isError = a === b;

            if(isError) return rej('Ha ocurrido un error corran!');

            res('Proceso asincrono concluido con exito');
        }, 5000); // 5000ms = 5s
    })
}

request(8, 9)
    .then(data => console.log(data))
    .catch(error => console.log(error));

