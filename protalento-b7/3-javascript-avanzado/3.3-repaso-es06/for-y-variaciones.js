// for, for of, for in, for each
// let friends = ['Monica', 'Rachel', 'Phoebe', 'Chandler']

// for(let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// for(let i = 0; i < friends.length; i++) {
//   if(friends[i] === 'Rachel') {
//   continue;
//   }
//   console.log(friends[i]);
// }

// for(let i = 0; i < friends.length; i++) {
//   if(friends[i] === 'Rachel') {
//   break;
//   }
//   console.log(friends[i]);
// }

// friends.forEach( (friend) => {
//   console.log(friend);
// })

// friends.forEach(friend => console.log(friend));


//For in -> Nombres de propiedades   -> Objetos
//For of -> valores                  -> Arreglos
let friends = ['Monica', 'Rachel', 'Phoebe', 'Chandler']
friends.propiedad = 'hola';

let user = {
  name: 'Yaxche',
  age: 29,
  insta: '@yaxchemanrique'
}

// for (let friend in friends) {
//   console.log(friend);
// }

for( let friend of friends) {
  // console.log(friend);
}

for( let prop in user) {
  console.log(prop, user[prop]);
}

// No funciona para elementos no iterables
// for( let prop of user) {
//   console.log(prop);
// }