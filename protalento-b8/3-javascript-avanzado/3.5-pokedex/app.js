const pokemonsGlobal = [];

const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');
    const responseJson = await response.json();
    const pokemons = responseJson.results;
    // console.log(pokemons);

    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        const pokemonUrl = pokemon.url;
        const response = await fetch(pokemonUrl);
        const responseJson = await response.json();
        normalizePokemons(responseJson, pokemon);
        
    }
    console.log(pokemonsGlobal);
    renderPokemonCard();
}

const normalizePokemons = (responseJson, pokemon) => {
    const img = responseJson.  
                    sprites.
                    other
                    ['official-artwork'].
                    front_default;
        const pokemonObject = {
            name: pokemon.name,
            img: img,
        };
        pokemonsGlobal.push(pokemonObject);
}

const pokemonGrid = document.querySelector('#pokemon-grid')

const renderPokemonCard = () => {
    for(let i = 0; i < pokemonsGlobal.length; i++) {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList = 'pokemon-card';
        pokemonCard.innerHTML = `
        <h2>${pokemonsGlobal[i].name}</h2>
        <img
            src="${pokemonsGlobal[i].img}"
        />`;
        pokemonGrid.appendChild(pokemonCard);
    }
    
}



getPokemons();