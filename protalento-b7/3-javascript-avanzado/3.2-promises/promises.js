// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Aqui están tus datos :)'), 5000)
    
// })

// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// const inputId = 1;

// fetch(`https://jsonplaceholder.typicode.com/todos/${inputId}`)
//     .then((data) => {
//         console.log(data)})
//     .then(() => {
//         console.log('ya quedaron tus datos');
//     }).catch((error) => {
//         console.log(error);
//     }).finally(()=> {
//         console.log('Se hizo lo que se pudo');
//     })

async function getDitto() {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const responseJson = await response.json();
        const pokemons = responseJson.results;
        // console.log(pokemons);
        for (let i = 0; i < pokemons.length; i++) {
            const pokemonUrl = pokemons[i].url;
            const response = await fetch(pokemonUrl);
            const responseJson = await response.json();
            console.log(responseJson.name);
        }
    }
    catch(error) {
        console.log(error);
    }
}

await getDitto();
console.log('Holi')