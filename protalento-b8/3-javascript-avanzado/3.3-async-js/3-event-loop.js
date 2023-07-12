/*
EVENT LOOP
Es un proceso que maneja las tareas asincronas de JavaScript.

JS es un lenguaje de programción de un solo hilo,
lo que significa que solo puede ejecutar una tarea a la vez.

Esto es un problema si tenemos una tarea assincrona que no sabemos
cuando va a terminar, ya que bloquearía toda la ejecución de JS.

Event Loop al rescate!

ESTRUCTURAS DE DATOS PRINCIPIOS:
- First In, First out o FIFO, se conoce como colas (Queues en Inglés)
- Last In, First out o LIFO, se conoce como pilas (Stacks en Inglés)

link: https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

*/

let data = {};

function firstFunc() {
    console.log(1);
    secondFunc();
    console.log(3);
}

function secondFunc() {
    setTimeout(() => {
        console.log(2);
        data = { name: "Stiven" }
        console.log(data);
    }, 0)
}

console.log('inicio');
firstFunc();

/* output:
inicio
1
3
2
{ name: "Stiven" }
*/
