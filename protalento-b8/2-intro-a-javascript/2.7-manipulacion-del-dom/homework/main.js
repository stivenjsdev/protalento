// JavaScript

// Obtén las referencias a los elementos
let boton = document.getElementById('añadir');
let lista = document.getElementById('miLista');

// Añade un controlador de eventos al botón
boton.addEventListener('click', function() {
  // Crea un nuevo elemento li
  let li = document.createElement('li');
  // Configura el contenido de texto del li
  li.textContent = 'Elemento ' + (lista.children.length + 1);
  // Añade el li a la lista
  lista.appendChild(li);
});

// Añade un controlador de eventos a la lista
lista.addEventListener('click', function(event) {
  // Si el elemento clicado fue un li, cambia su color de texto a rojo
  if (event.target.tagName.toLowerCase() === 'li') {
    event.target.style.color = 'red';
  }
});

// Añade un controlador de eventos a la lista para manejar el doble clic
lista.addEventListener('dblclick', function(event) {
  // Si el elemento que ha sido doble clicado es un li, elimínalo de la lista
  if (event.target.tagName.toLowerCase() === 'li') {
    lista.removeChild(event.target);
  }
});
