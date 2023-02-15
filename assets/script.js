//DOM Hooks//
var cityNameInput = document.querySelector("#city-name-input");
var searchButton = document.querySelector("#search-button");
var forecastSection = document.querySelector(".forecast-section");
var apiKey = "e00c5c4de615eec46a4b90f03955e648";

function handleSubmit(event) {
  var cityName = document.querySelector("#city-name-input").value;
  event.preventDefault();
  getLonLat(cityName);
}

function getLonLat(cityName) {
  var getLonLat =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    "&limit=5&appid=" +
    apiKey;


  https: fetch(getLonLat)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].name);
        var cityNameData = data[i].name;
        var lat = data[i].lat;
        var lon = data[i].lon;
      }
      console.log(data);
      console.log(lat, lon, cityNameData);
      getWeather(lat, lon, cityNameData);
      renderOnHtml(lat, lon, cityNameData);
      return lat, lon, cityNameData;
    });
}

function getWeather(lat, lon, cityNameData) {
  console.log("getweather", lat, lon, cityNameData);
  var apiKey = "e00c5c4de615eec46a4b90f03955e648";
  var getWeatherData =
    "https://api.openweathermap.org/data/3.0/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude=minuetly,hourly&appid=" +
    apiKey;
  // free API subscription does not include weather call back
  //api.openweathermap.org/data/3.0/onecall?lat=40.2331483&lon= -76.1371684&exclude=hourly&appid=e00c5c4de615eec46a4b90f03955e648

  fetch(getWeatherData).then(function (data) {
    console.log(data);
  });
}

function renderOnHtml(lat, lon, cityNameData) {
  var cityNameRender = document.getElementById("city-name");
  var latRender = document.getElementById("lat");
  var lonRender = document.getElementById("lon");

  cityNameRender.textContent = cityNameData;
  latRender.textContent = lat;
  lonRender.textContent = lon;
}
searchButton.addEventListener("click", handleSubmit);
