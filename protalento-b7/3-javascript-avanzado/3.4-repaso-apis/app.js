// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&units=metric&appid={API key}
const API_KEY = '33e210e3244afb4f2582929f61935a15';
const lat = 4.711;
const lon = -74.0721;
let URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

const dayCards = document.querySelectorAll('.day-card');

const getWeather = async () => {
    const response = await fetch(URL);
    const weatherResponse = await response.json();
    // console.log(weatherResponse);
    renderCards(weatherResponse);
}

const renderCards = (weatherResponse) => {
    for (let i = 0; i < dayCards.length; i++) {
        if(i === 0) {
            let cardDate = (weatherResponse.current.dt)*1000;
            let dateConstructor = new Date(cardDate);
        let dateString = dateConstructor.toDateString();
            let cardDeg = weatherResponse.current.temp;
            let cardMax = weatherResponse.daily[0].temp.max;
            let cardMin = weatherResponse.daily[0].temp.min;
            let cardDesc = weatherResponse.current.weather[0].description;
            let cardPl = weatherResponse.daily[0].rain;
            const innerHtmlCard = `
                        <h2>${dateString}</h2>
                        <p>Temp:${cardDeg}</p>
                        <p>Max:${cardMax}</p>
                        <p>Min:${cardMin}</p>
                        <p>Desc:${cardDesc}</p>
                        <p>PLl:${cardPl}</p> `;
            dayCards[i].innerHTML = innerHtmlCard;
        } else {
        let cardDate = (weatherResponse.daily[i].dt) * 1000;
        let dateConstructor = new Date(cardDate);
        let dateString = dateConstructor.toDateString();
        let cardDeg = weatherResponse.daily[i].temp.day;
        let cardMax = weatherResponse.daily[i].temp.max;
        let cardMin = weatherResponse.daily[i].temp.min;
        let cardDesc = weatherResponse.daily[i].weather[0].description;
        let cardPl = weatherResponse.daily[i].rain;
        const innerHtmlCard = `
                    <h2>${dateString}</h2>
                    <p>Temp:${cardDeg}</p>
                    <p>Max:${cardMax}</p>
                    <p>Min:${cardMin}</p>
                    <p>Desc:${cardDesc}</p>
                    <p>PLl:${cardPl}</p> `;
        dayCards[i].innerHTML = innerHtmlCard;
    }
    }
}





getWeather();