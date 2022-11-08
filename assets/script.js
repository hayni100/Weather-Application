//DOM Hooks//
var cityNameInput = document.querySelector("#city-name-input");
var searchButton = document.querySelector("#search-button");
var pastSearch = document.querySelector("#past-search");
var cityAndDate = document.querySelector("#city-date");
var currentWeather = document.querySelector("#currentWeather");
var currentTemp = document.querySelector("#current-temp");
var currentWind = document.querySelector("#current-wind");
var currentHumidity = document.querySelector("#current-humidity");
var searchForm = document.querySelector("#search-form");

//API key//
var apiKey = "e00c5c4de615eec46a4b90f03955e648";

//function with fetch request//

function getApi() {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiKey;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
        cityAndDate.textContent = data.weather;
        currentTemp.textContent = data.main.temp;
        currentWind.textContent = data.wind.speed + "MPH";


    });

function handleSubmit(e) {
    e.preventDefault();

    var cityName = cityNameInput.value.trim();
    getApi(cityName);
    
  }
  handleSubmit(e);
}
searchButton.addEventListener('click', handleSubmit());

// {"coord":{"lon":-93.2638,"lat":44.98},
// "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":
// "stations",
// "main":{"temp":274.45,"feels_like":269.27,"temp_min":272.71,"temp_max":275.88,"pressure":1035,"humidity":70},"visibility":10000,"wind":{"speed":6.17,"deg":110},"clouds":{"all":75},"dt":1667888371,"sys":{"type":2,"id":2009535,"country":"US","sunrise":1667912470,"sunset":1667947950},"timezone":-21600,"id":5037649,"name":"Minneapolis","cod":200}