const fs = require('fs');

// fs.writeFile('./test1', 'linea de codigo no 1', function (error) {
//     if(error){
//         console.log(error)
//     } else {
//         console.log('archivo creado');
//     }
// })

// console.log('ultima linea de codigo')

// Funciones flecha
// () => {

// }

// fs.writeFile('./test1.txt', 'linea de codigo no 1', (error) => {
//     if(error){
//         console.log(error)
//     } else {
//         console.log('archivo creado');
//     }
// })

fs.readFile('./tes.txt', (error, datos) => {
    if(error) {
        console.log(error);
    } else {
        console.log(datos.toString());
    }
})

// console.log(fs)

// const fs = require('fs/promises');

// fs.writeFile('./test1.txt', 'linea de codigo no 1')
//     .then(() => {
//         console.log('archivo creado');
//         console.log('depues de crear archivo')
//     })
//     .catch((error) => {console.log(error)})

// console.log('ultima linea de codigo')