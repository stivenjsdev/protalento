# Homework

Parte importante de aprender a trabajar con peticiones HTTP implica entender cómo funciona una API.

Para entender cómo funciona una API es necesario:
- Leer la documentación de la API (si es que existe)
- Hacer pruebas (testear) la API

Para hacer pruebas, pueden hacerlas directamente con su código, o bien pueden probar usando Clientes HTTP. Si les interesa conocer más de esto, les recomiendo este video:
[https://www.youtube.com/watch?v=o4tvKERrlNA](https://www.youtube.com/watch?v=o4tvKERrlNA)

(Yo les recomiendo usar Insomnia REST Client :wink:) 

1. Hacer una petición a la PokeAPI para obtener cualquier Pokémon.  Muestra sus tipos en consola mediante un for.
   [https://pokeapi.co/](https://pokeapi.co/)
   
2. Escribe una función que al ejecutarse realice una petición a la API de Open Library.
   (Ejemplo: peticionLibro(“i robot”);
   Buscar un libro y traer el o los autores del primer libro
   [http://openlibrary.org/search.json?q=i+robot](http://openlibrary.org/search.json?q=i+robot))

3. Hacer una petición por autor y devolver la lista de sus libros
   [http://openlibrary.org/search.json?author=asimov](http://openlibrary.org/search.json?author=asimov)
   
4. Hacer una petición y devolver el género de la banda deseada
   [http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse](http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse)

5. Hacer una petición a la swapi para obtener un personaje y también obtener las películas donde aparece.
   [https://swapi.co/](https://swapi.co/)

6. Traer los primeros 151 pokemon de la primera generacion y devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño y peso.
   [https://pokeapi.co/](https://pokeapi.co/)
   
**(EXTRA)**

7. Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana pasada hasta el día de ayer.
   [https://api.nasa.gov/](https://api.nasa.gov/)
