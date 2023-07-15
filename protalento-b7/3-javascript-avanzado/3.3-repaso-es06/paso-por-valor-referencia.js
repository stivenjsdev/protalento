// Paso por valor y referencia
let a = 10; /*10-> 0x01*/
let b = 'Hola';
let c = a; /*10-> 0x01*/

console.log(a);
console.log(c);

c = c + 1;
console.log(c);

let d = [1, 2]; /*[1,2]-> 0x02*/
console.log(`d = ${d}`);

let e = d; /*[1,2]-> 0x02*/
console.log(`e = ${e}`);

e.push(3);
console.log(`d = ${d}`);
console.log(`e = ${e}`);

let h = [...e]; /*[1,2,3]-> 0x05*/
console.log(`h = ${h}`);
h.push(4);
console.log(`e = ${e}`); /*[1,2,3]-> 0x02*/
console.log(`h = ${h}`); 


console.log(`e == d ? ${e == d}`);
console.log(`e === d ? ${e === d}`);


let f = [1,2]; /*[1,2]-> 0x03*/
let g = [1,2]; /*[1,2]-> 0x04*/
console.log(`f == g ? ${f == g}`);
console.log(`f === g ? ${f === g}`);

//Shallow Copy, Deep copy - Paso por referencia