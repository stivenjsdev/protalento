const yaxche = {
	firstName: 'Yaxche',
	lastName: 'Manrique',
	age: 2023-1993,
	job: 'sensei',
	friends: ['Rachel', 'Monica', 'Chandler', 'Joey']
}

console.log(`Hola, mi nombre es ${yaxche.firstName}, mi trabajo es ser ${yaxche.job} y tengo ${yaxche.age} años`);


yaxche.friends[2];
yaxche.hobby = 'patinar';
// console.log(yaxche);

//literal Template | Template strings
// Hola, mi nombre es Yaxche, mi trabajo es ser sensei y tengo 30 años

console.log('Hola, mi nombre es ' + yaxche.firstName + ', mi trabajo es ser ' + yaxche.job + ' y tengo ' + yaxche.age + ' años');

// Métodos

const yaxche = {
	firstName: 'Yaxche',
	lastName: 'Manrique',
	birthYear: 1993,
	job: 'sensei',
	friends: ['Rachel', 'Monica', 'Chandler', 'Joey'],
  
  calcAge: function () {
    yaxche.age = 2023 - yaxche.birthYear; 
  }
}

console.log(yaxche);

yaxche.calcAge();

console.log(yaxche)