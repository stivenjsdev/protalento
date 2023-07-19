const friends = ['Monica', 'Rachel', 'Phoebe'];
const yaxche = {
  name: 'Yaxche',
  insta: '@yaxchemanrique',
  city: 'CDMX'
}
console.log(yaxche.name)

// for (let i = 0; i < friends.length; i++) {
//   if(friends[i] === 'Rachel'){
//     break
//   }
//   console.log(friends[i]);
// }

// friends.forEach((friend) => console.log(friend));

for ( friend of friends ) {
  console.log(friend);
}

// for ( prop of yaxche ) {
//   console.log(prop);
// }

for ( friend in friends ) {
  console.log(friend);
}

for ( prop in yaxche ) {
  console.log(prop);
}

for ( prop in yaxche ) {
  console.log(yaxche[prop]);
}