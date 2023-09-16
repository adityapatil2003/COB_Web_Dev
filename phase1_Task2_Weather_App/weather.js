const apiKey = "4d6ec9a91835f2ef5981b8a0644b6134";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let searchCity = document.querySelector(".search_field input");
let searchBtn = document.querySelector(".search_field button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
  console.log(data);

  if (response.status == 404) {
    document.querySelector(".weather_icon").src = "Images/error.png";
    document.querySelector(".city").innerHTML = "City Not Found!"
    document.querySelector(".temperature").innerHTML = "Sorry!";
    document.querySelector(".humidity").innerHTML = "NA"
    document.querySelector(".wind").innerHTML = "NA"
  } else {
    var data = await response.json();
  

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

  if (data.weather[0].main == "Clouds") {
    document.querySelector(".weather_icon").src = "Images/Clouds.png";
  } else if (data.weather[0].main == "Clear") {
    document.querySelector(".weather_icon").src = "Images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".weather_icon").src = "Images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector(".weather_icon").src = "Images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".weather_icon").src = "Images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    document.querySelector(".weather_icon").src = "Images/snow.png";
  }
}
}

searchCity.addEventListener("keyup", (e) => {
  if (e.which == 13) {
    checkWeather(searchCity.value);
  }
});

searchBtn.addEventListener("click", () => {
  checkWeather(searchCity.value);
});
