// crear un elemento div
const div = document.createElement("div");

// anadir estilos al div
div.style.color = "blue";
div.style.border = "1px solid black";
div.style.padding = "10px";
div.style.backgroundColor = "green";

// crear un element ul
const ul = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = "Element " + i;
  if (i === 3) {
    // = = =
    li.style.color = "black";
  }
  ul.appendChild(li);
}

// anadir el ul al div
div.appendChild(ul);

// anadir el div al cuerpo del documento (body)
document.body.appendChild(div);

// anadir un manejador de eventos al ul (event handler)
ul.addEventListener("click", function (event) {
  // el evento click se propaga hacia arriba a traves de los elementos,
  // asi que tenemos que comprobar si un elemento li fue clicado
  const liClicked = event.target;
  console.log(liClicked); // traer el elemento o nodo que disparo el evento
  // disparar un alert cuando se haga click en el elemento li
  const liTagName = liClicked.tagName;
  console.log(liTagName);
  if (liTagName.toLowerCase() === "li") {
    alert("Hiciste click en " + liClicked.textContent);
  }
});

// COMO OBTENER ELEMENTOS

// obtener un nodo por id
const title = document.getElementById("title");
// obtener texto de un elemento
console.log(title.textContent);
// anadir text al elemento
title.textContent += " - DOCUMENT OBJECT MODEL";
// anadir texto o elementos al elemento
console.log(ul.innerHTML);
ul.innerHTML += "<li>Hola reemplace el contenido el ul</li>";
// ul.innerHTML = "<li>Hola reemplace el contenido el ul</li>";

// anadir atributo al elemento
title.setAttribute("title", "esto es un titulo");

// obtener un nodelist por clase
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
  const element = paragraphs[i];

  element.style.color = "green";
  element.style.fontSize = "20px"; // las propiedad css van escritas en camelCase
}

// obtener nodelist por tag (etiqueta)
const spans = document.getElementsByTagName("span");
console.log(spans);

for (let i = 0; i < spans.length; i++) {
  const span = spans[i];
  span.style.fontWeight = "bold";

  const infiltrate = document.createElement("p");
  infiltrate.textContent = " soy un infiltrado";
  infiltrate.style.margin = '0';
  infiltrate.style.display = 'inline';

  span.appendChild(infiltrate);
}

