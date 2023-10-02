let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let apiKey = "728daf944cfe919571a57ef2b9e8b264";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" +
  apiKey;

function showTemp(response) {
  let tempElement = document.querySelector("#temperature");
  let tempDesc = document.querySelector("#temp-description");
  let Humidity = document.querySelector("#Humidity");
  let Wind = document.querySelector("#Wind");
  let iconElement = document.querySelector("#icon");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  tempDesc.innerHTML = response.data.weather[0].description;
  Humidity.innerHTML = "Humidity: " + response.data.main.humidity;
  Wind.innerHTML = "Wind: " + Math.round(response.data.wind.speed) + "km";
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let date = document.querySelector("#showDate");
let currentTime = new Date();
date.innerHTML = getDayTime(currentTime);

function getDayTime(date) {
  let showtime =
    days[date.getDay()] + " " + date.getHours() + ":" + date.getMinutes();
  return showtime;
}
let citySearch = document.querySelector("#btnSearch");
citySearch.addEventListener("click", SearchCity);
function SearchCity(event) {
  event.preventDefault();
  let cityNameElement = document.querySelector("#cityName");
  cityNameElement.innerHTML = document.getElementById("citySearch").value;
  let city = cityNameElement.innerHTML;
  axios.get(apiUrl + "&q=" + city).then(showTemp);
}

let celsius = document.querySelector("#Celcius");
celsius.addEventListener("click", setCelsius);

function setCelsius(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(((tempElement.innerHTML - 32) * 5) / 9);
}
let fahrenheitTemperature = document.querySelector("#Fahrenheit");
fahrenheitTemperature.addEventListener("click", setfahrenheit);

function setfahrenheit(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round((tempElement.innerHTML * 9) / 5 + 32);
}

window.onload = function () {
  let cityNameElement = document.querySelector("#cityName");
  let city = cityNameElement.innerHTML;
  axios.get(apiUrl + "&q=" + city).then(showTemp);
};
