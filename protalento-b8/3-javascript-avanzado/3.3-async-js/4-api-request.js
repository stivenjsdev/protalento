/*
APIs Request
API es el acrónimo de Application Programming Interface

Como cualquier interfaz en el mundo de la informatica
se trata de algo capaz de comunicar dos entidades que
hablan lenguajes distintos.

Por ejemplo una interfaz de usuario permite la comunicación
entre nosotros los usuarios humanos, y aplicaciones digitales
por medio de elementos visuales como botes (para una interfaz grafica)
o texto (Para una intefaz por linea de comandos).

Su uso no solo se limita a comunicar frontend y backend.
si no que también hay casos en que un backend llama a otro backend exteno.

Las APIs utilizan varios lenguajes intermediarios como por ejemplo:
- XML
- YAML
- JSON

Para la construcción de APIs se pueden utilizar las siguientes arquitecturas:
- SOAP
- REST
- GRAPHQL

Las 3 anteriores son las mas comunes y utilizan el mismo protocolo
de comunicación que es HTTP o Hypertext Transfer Protocol.


HTTP tiene muchisimos metodos, pero los que utiliza en la arquictura REST
son pra hacer el basico CRUD:
- CREATE - POST
- READ - GET
- UPDATE - PUT/PATCH
- DELETE - DELETE

En JS podemos hacer consultas a una API, mediante la función fetch,
proveniente de la famosa WEB API.

fetch(url, options)
    .then(respose => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
-------
const response = await fetch(url, option);
const data = await response.json();
console.log(data);

si no se le especifican las opciones al fetch siempre utilizara el metodo GET

*/

/*
JSON example:
[
    {
        "name": "Stiven",
        "lastName": "Trujillo"
    }
]
*/