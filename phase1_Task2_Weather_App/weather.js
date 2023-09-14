const apiKey = "4d6ec9a91835f2ef5981b8a0644b6134";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmph"

}

checkWeather()