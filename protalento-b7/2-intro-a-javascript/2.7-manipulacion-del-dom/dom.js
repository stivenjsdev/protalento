// crear un elemento div
const div = document.createElement("div");
// console.log(div);

// anadir estilos css al div
div.style.backgroundColor = "peru"; // camelCase => en css backgroun-color
div.style.border = "1px solid black";
div.style.padding = "10px";
// anadir estilos mediante css
div.classList.add("container");
div.classList.remove("container");

const list = document.createElement("ul");

for (let i = 1; i < 5; i++) {
  const li = document.createElement("li");
  // li.textContent = "Elemento " + i;
  li.innerHTML = "Elemento @" + i;
  // li.innerHTML = `<span>hola Elemento ${i}</span>`;

  list.appendChild(li);
}

console.log(list.innerHTML);

div.appendChild(list);

// anadir el div a la etiqueca body
document.body.appendChild(div);

// anadir un manejador de eventos al ul (event handler)
list.addEventListener("click", function (event) {
  console.log(event.target);
  // disparar un alert cuando se haga click en un elemento li
  // y con event.target puedo saber cual elemento exactamente yo le di click
  const selectedLi = event.target;
  console.log(selectedLi.tagName);
  if (selectedLi.tagName.toLowerCase() === "li") {
    alert("Hiciste click en " + selectedLi.textContent);
  }
});

// COMO OBTENER ELEMENTOS

// obtener un nodo por id
const title = document.getElementById("title");
console.log(title);
// title.textContent += " - DOCUMENT OBJECT MODEL";
title.innerHTML += " - DOCUMENT OBJECT MODEL";
// anadir atributos a los elementos
title.setAttribute("title", "Esto es un titulo");

// obtener nodelist por clase
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

// como recorrer un nodelist
for (let i = 0; i < paragraphs.length; i++) {
  const node = paragraphs[i];

  node.style.color = "green";
  node.style.fontSize = "18px";
}


// obtener nodelist por tag (nombre de etiqueta)
// const spans = document.querySelectorAll("span");
const spans = document.getElementsByTagName("span");

for (let i = 0; i < spans.length; i++) {
  const span = spans[i];

  span.style.fontWeight = "bold";

  const infiltrate = document.createElement("p");
  infiltrate.textContent = " soy un infiltrado";
  infiltrate.style.margin = "0";
  infiltrate.style.display = "inline";

  span.appendChild(infiltrate)
}