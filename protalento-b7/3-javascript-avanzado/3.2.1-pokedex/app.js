let globalPokemon = [];
const mainContainer = document.querySelector('.main-container');

async function getPokemons() {
    try{
        //Consultar la API
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        // Consumir la API en un formato que pueda procesar (JSON)
        const responseJson = await response.json();
        // No me sirve toooodo lo que tiene la API, solo 
        //quiero los results
        const pokemons = responseJson.results;
        console.log(pokemons);

        for (let i = 0; i < pokemons.length; i++) {
            //Me voy a crear una variable temporal para cada 
            //uno de los pokemons
            const pokemon = pokemons[i];
            // pokemon = {name: "bulbasaur"
                    //url: "https://pokeapi.co/api/v2/pokemon/1/"}

            //Necesito capturar la URL
            const pokemonUrl = pokemon.url;
            //Consultar la API
            const response = await fetch(pokemonUrl);
            // Consumir la API en un formato que pueda procesar (JSON)
            const responseJson = await response.json();
            normalizePokemons(pokemon.name, responseJson);
        }
    }
    catch(error) {
        console.log(error);
    }
}

const normalizePokemons = (name, responseJson) => {
    //Es el path que tengo que seguir para encontrar la URL de la 
    //imagen de cada pokemon
    const img = responseJson.sprites.other['official-artwork'].front_default;
    const pokemon = {
        name: name,
        img: img, 
    };
    console.log(pokemon);
    /* { img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        name: "bulbasaur"}*/
    //Agrego cada uno de los pokemons a mi arreglo
    globalPokemon.push(pokemon);
}

const renderPokemonCard = (element) => {
    const cardPokemonDiv = document.createElement('div');
    cardPokemonDiv.classList = 'card';
    cardPokemonDiv.innerHTML = `
                    <h2>${element.name}</h2>
                    <img src='${element.img}' />   
                    `;
                    /*'<h2>'+element.name+'</h2>
                    <img src='+element.img+'/>' */
    mainContainer.appendChild(cardPokemonDiv);
}

const renderPokemons = () => {
    // Hay que pintar en la pantalla cada uno de los pokemons que 
    // esta en nuestro arreglo globalPokemon
    for (let i = 0; i < globalPokemon.length; i++) {
        // Para cada una de las posiciones de globalPokemon creamos un card
        renderPokemonCard(globalPokemon[i]);
    }
}


async function main() {
    await getPokemons();
    renderPokemons();
}

main();