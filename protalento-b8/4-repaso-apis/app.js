// https://api.openweathermap.org/data/2.5/
    // onecall?lat={lat}&lon={lon}&appid={API key}

const API_KEY = '33e210e3244afb4f2582929f61935a15';
const lat = 3.42158;
const lon = -76.5205;
const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

const body = document.querySelector('body');

const getWeather = async () => {
    const response = await fetch(URL);
    const responseJson = await response.json();
    console.log(responseJson);
    renderCards(responseJson);
}

const renderCards = (responseJson) => {
    for (let i=0; i < 7 ; i++) {
        if (i===0) {
            // TimeStamp
            let timestamp = responseJson.current.dt;
            let date = new Date(timestamp * 1000);
            let dateString = date.toDateString();
            let temp = responseJson.current.temp;
            let tempMin = responseJson.daily[0].temp.min;
            let tempMax = responseJson.daily[0].temp.max;
            let feelsLike = responseJson.current.feels_like;
            let description = responseJson.current.weather[0].description;
            const card = document.createElement('div');
            card.classList = 'card';
            card.innerHTML = `
                <h2>${dateString}</h2>
                <p>${temp}</p>
                <p>${tempMin}</p>
                <p>${tempMax}</p>
                <p>${feelsLike}</p>
                <p>${description}</p>
            `;
            body.appendChild(card);
        } else {
            let timestamp = responseJson.daily[i].dt;
            let date = new Date(timestamp * 1000);
            let dateString = date.toDateString();
            let tempMin = responseJson.daily[i].temp.min;
            let tempMax = responseJson.daily[i].temp.max;
            let feelsLike = responseJson.daily[i].feels_like.eve;
            let description = responseJson.daily[i].weather[0].description;
            const card = document.createElement('div');
            card.classList = 'card';
            card.innerHTML = `
                <h2>${dateString}</h2>
                <p>${tempMin}</p>
                <p>${tempMax}</p>
                <p>${feelsLike}</p>
                <p>${description}</p>
            `;
            body.appendChild(card);
        }
    }
}

getWeather();