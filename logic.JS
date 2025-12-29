const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");

const city = document.querySelector("#city-name");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");

const apiKey ="df1bf4e210ffcbddb14d39195bed0bb8";

async function getWeather(city) 
{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    document.querySelector("#city-name").innerHTML = data.name;
    document.querySelector("#temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#description").innerHTML = data.weather[0].description;
}

searchBtn.addEventListener("click", () => {
    const cityText = cityInput.value;
    getWeather(cityText);
})