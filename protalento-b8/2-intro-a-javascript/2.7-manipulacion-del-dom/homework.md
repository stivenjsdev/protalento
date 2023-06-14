# Ejercicio Práctico: Interacción con el DOM

## Objetivo

Crear una página web sencilla que permita a los usuarios agregar, modificar y eliminar elementos de una lista. Además, la página deberá cambiar el color de los elementos de la lista cuando el usuario haga clic en ellos.

## Instrucciones

1. **Crear la estructura HTML:** Crea una página HTML con un elemento `ul` vacío y un botón. Asegúrate de darles a ambos elementos un id para que puedas acceder a ellos desde JavaScript.

    ```html
    <button id="añadir">Añadir elemento</button>
    <ul id="miLista"></ul>
    ```

2. **Obtener referencias a los elementos:** En tu archivo JavaScript, define una variable para cada uno de los elementos que acabas de crear utilizando `document.getElementById`.

3. **Agregar elementos a la lista:** Añade un controlador de eventos al botón para que cuando el usuario haga clic en él, se añada un nuevo elemento `li` al `ul`. El contenido del `li` debe ser "Elemento n", donde "n" es el número total de elementos `li` en la lista después de añadir el nuevo elemento.

4. **Cambiar el color de los elementos de la lista:** Añade un controlador de eventos al `ul` para que cuando el usuario haga clic en un elemento `li`, el color del texto de ese elemento se cambie a rojo. Utiliza el objeto `event` para determinar qué elemento `li` fue clicado.

5. **Eliminar elementos de la lista:** Añade otro controlador de eventos al `ul` para que cuando el usuario haga doble clic en un elemento `li`, ese elemento se elimine de la lista.

## Consejos

- Recuerda que puedes usar `document.createElement` para crear nuevos elementos, `element.appendChild` para añadir un elemento hijo a un elemento, y `element.removeChild` para eliminar un elemento hijo de un elemento.
- Puedes utilizar `element.style` para cambiar el estilo de un elemento.
- Para añadir controladores de eventos a un elemento, puedes usar `element.addEventListener`.
- Para determinar qué elemento fue clicado en un controlador de eventos, puedes usar `event.target`.

## Conclusión

Una vez que hayas completado el ejercicio, deberías tener una buena comprensión de cómo utilizar el DOM para interactuar con una página web y responder a los eventos del usuario. Además, este ejercicio te dará la oportunidad de practicar conceptos importantes como la creación y manipulación de elementos y la gestión de eventos.
