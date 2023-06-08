const yaxche = {
	firstName: 'Yaxche',
	lastName: 'Manrique',
	age: 0,
	job: 'sensei',
	friends: ['Rachel', 'Monica', 'Chandler', 'Joey']
}

// console.log(yaxche.age);
// console.log(yaxche.friends[2]);


//Expresión
// console.log(yaxche['age']);

// const propiedadDeseada = 'lastName';
// console.log(yaxche[propiedadDeseada]); 

// console.log(yaxche.propiedadDeseada);

// console.log(yaxche);

// yaxche.hoby = 'patinar';
// yaxche.hasPassport = true;

// console.log(yaxche);

// // Ejercicio en clase:
// console.log('Hola, me llamo ' + yaxche.firstName + ' y tengo ' + yaxche.age + ' años');

const propiedadDeseada = prompt("Qué quieres sabe de mi? (puedes escoger entre 'firstName', 'lastName'...)");

// if (yaxche[propiedadDeseada] != undefined) {
//     alert(yaxche[propiedadDeseada]);
// }


if (yaxche[propiedadDeseada] || yaxche[propiedadDeseada] === 0) {
    alert(yaxche[propiedadDeseada]);
} else {
    alert('No tenemmos esa propiedad, intenta de nuevo');
}

const yaxche = {
	firstName: 'Yaxche',
	lastName: 'Manrique',
	birthYear: 1993,
	job: 'sensei',
	friends: ['Rachel', 'Monica', 'Chandler', 'Joey'],
  
  calcAge: function () {
    yaxche.age = 2023 - yaxche.birthYear;
    console.log('Hola, estoy dentro de un metodo');
  }
}

console.log(yaxche);

yaxche.calcAge();

console.log(yaxche);

function calcAge2() {
    console.log('Hola, CalcAge2');
  }

calcAge2();
