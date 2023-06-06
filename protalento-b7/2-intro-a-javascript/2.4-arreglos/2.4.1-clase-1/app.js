// console.log(friends);

// console.log('Mi mejor amiga es '+ friends[0]);

// const friendsLength = friends.length;
// console.log(friendsLength);

// friends[2] = 'Rachel';
// console.log(friends);

// La reasignación NO se vale!
// friends = ['Leonard', 'Sheldon', 'Penny'];

// const firstName = 'Yax';
// const yaxche = [ firstName, 'Rios', 2023-1993, friends];
// console.log(yaxche);

//Mi mejor amigo es Chandler

// console.log('Mi mejor amigo es ' + yaxche[3][2]);

// const years = [1992, 1954, 1982];

// function calcAge(birthYear) {
//     return 2023 - birthYear;
// }

// console.log(calcAge(years[2]));

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];

// console.log(ages);

const friends = ['Phoebe', 'Monica', 'Chandler', 'Joey', 'Ross'];

console.log(friends.splice(1, friends.length / 2, 'Gunther', 'Richard'));

console.log(friends)