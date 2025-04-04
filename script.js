const apiKey = "dfe2aa556109ea704928dec09dfc1283";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorContainer = document.querySelector(".error");
async function checkWeather(city) {
  if (!city) {
    errorContainer.innerHTML = "Аймгаа бичнэ үү";
    errorContainer.style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {

      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      var data = await response.json();
      console.log(data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main === "Cloudy") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
      }
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".errorContainer").style.display = "none";

  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
