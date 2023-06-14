const yaxche = {
	firstName: 'Yaxche',
	lastName: 'Manrique',
	age: 0,
	job: 'sensei',
	friends: ['Rachel', 'Monica', 'Chandler', 'Joey']
}

const propiedad = prompt('Qué quieres saber? "age, firstName, lastName,..."');

if(yaxche[propiedad] || yaxche[propiedad] === 0) {
    alert(propiedad + ': ' + yaxche[propiedad]);
} else {
    alert(propiedad + ' No Existe!');
}

// Falsy = '', undefined, null, NaN, 0 
