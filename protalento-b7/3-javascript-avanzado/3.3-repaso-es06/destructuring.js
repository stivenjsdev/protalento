// Destructuring
const  alphabet = ['A', 'B', 'C', 'D'];
const numbers = [1, 2, 3, 4, 5]

const a1 = alphabet[0];
// console.log(a1);

const [ , ,h2] = alphabet;
// console.log(h2);

// Spread operator "..."
const [ , b2, ...restante] = alphabet;

// console.log(restante);

const newArray = [...alphabet, ...numbers];
// console.log(newArray);

const newArray2 = alphabet.concat(numbers)
// console.log(newArray2);

function sumAndMultiply(a,b) {
  return [a+b, a*b]
}

const [sum, multiply] = sumAndMultiply(2, 5);
// console.log(sum);
// console.log(multiply);

const Yax = {
  name: 'Yaxche',
  age: 29,
  more: {
    city: 'Mexico',
    insta: '@yaxchemanrique'
  }
}

const Stiven = {
  name: 'Stiven',
  age: 25,
  // more: {
  //   city: 'Colombia',
  //   insta: '@stiventrujillo'
  // }
}

const firstName1 = Yax.name;
console.log(firstName1);

// const {name: firstName, more: { city: ciudad }} = Stiven;
// console.log(firstName);
// console.log(ciudad);

const {more: { insta: socialMedia = 'No tiene' }} = Yax;
// console.log(socialMedia);

const {name: firstName, ...sobrante} = Yax;
// console.log(firstName);
// console.log(sobrante);

const frankie = {...Yax, ...Stiven};
// console.log(frankie);

console.log(Yax)

function printUser1(user) {
  console.log(`El nombre de este usuario es: ${user.name} y su edad es de: ${user.age} años`);
}

printUser1(Yax);

// Pan de cada dia en React!
function printUser2({ name, age}) {
  console.log(`El nombre de este usuario es: ${name} y su edad es de: ${age} años`);
}
printUser2(Yax);