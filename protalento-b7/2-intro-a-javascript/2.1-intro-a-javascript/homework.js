// Comentario: Inicio del script

// Solicitamos el peso y la altura al usuario
const peso = prompt("Por favor, ingrese su peso en kg:");
const altura = prompt("Por favor, ingrese su altura en metros:");

// Comentario: Calculamos el IMC
let imc = peso / (altura * altura);

// Comentario: Creamos el objeto persona
const persona = {
  peso: peso,
  altura: altura,
  imc: imc,
};

// Comentario: Mostramos los resultados
console.log("El IMC de la persona es: " + persona.imc);
document.write("El IMC de la persona es: " + persona.imc);

// Comentario: Fin del script
