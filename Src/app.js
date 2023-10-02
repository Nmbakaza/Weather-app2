function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "728daf944cfe919571a57ef2b9e8b264";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid={API key}&units=metric";

axious.get(url).then(displayTemperature);
