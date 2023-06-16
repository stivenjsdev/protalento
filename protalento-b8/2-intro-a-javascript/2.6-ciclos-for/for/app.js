// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} x 12 = ${i * 12}`)
// }

// let pokemons = ['pikachu', 'snorlax', 'eve', 'charmander', 'mew', 'mewto', '', ''];

// console.log(pokemons[0]);
// console.log(pokemons[1]);
// console.log(pokemons[2]);
// console.log(pokemons[3]);

// console.log(pokemons.length)

// for(let i = 0; i <= 5; i++) {
//   console.log(pokemons[i]);
// }

// for(let i = 0; i < pokemons.length; i++) {
//   console.log(pokemons[i]);
// }


// Continue
let array = [0, 1, 2, 3, 4, 5, 6];

// que no imprima el num 3
// for (let i = 0; i < array.length; i++){
//   if(array[i] === 3) {
//     continue
//   }
//   console.log(array[i])
// }

// que no imprima los pares
// for (let i = 0; i < array.length; i++){
//   if(array[i] % 2 === 0) {
//     continue
//   }
//   console.log(array[i])
// }

// que no imprima la posición 4
// for (let i = 0; i < array.length; i++){
//   if(i === 4) {
//     continue
//   }
//   console.log(array[i])
// }

// Break
for(let i = 0; i < array.length; i++) {
  if( i === 4) {
    break
  }
  console.log(array[i]);
}

console.log(i);


let array2 = [0, 1, 2, 3, 4, 5, 6];

let i;

for(i = 0; i < array2.length; i++) {
    if( i === 4) {
      break
    }
    console.log(array2[i]);
  }
  
  console.log({i}); 