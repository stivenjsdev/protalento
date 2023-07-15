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

// request(8, 9)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Ejercicio probar con diferentes valores para a y b.

/*
ASYNC AWAIT
Es una manera especial de trabajar con promesas,
que se introdujo en ES8 o ECMAScript 2017

Esta sintaxis permite escribir código asincrono
de manera que se asemeje mas a código sincrino tradicional,
lo cual puede hacerlo más legible y fácil de entender

async function myFunc() {
    try {
        const response = await funcQueRetornaUnaPromesa();
        // codigo que requiere de la respuesta anterior
        console.log(response);
    } catch(error) {
        console.error(error);
    }
}

myFunc ahora es una promesa, por lo que a la hora de llamarla
hay que tratarla como tal como una promesa

async function main() {
    const result = await myFunc();
}

o tambien .then

myFunc()
    .then()
    .catch()
*/

const requestFunc = async (a, b) => {
    try {
        const response = await request(a, b)
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

// Ejecutamos la funcion como cualquier otra funcion de JS
requestFunc(8, 9)
    .then(res => {
        console.log('fin');
    })
    .catch(e => console.log(e));

