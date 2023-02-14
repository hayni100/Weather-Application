//DOM Hooks//
var cityNameInput = document.querySelector("#city-name-input");
// var cityName = document.querySelector("#city-name");
var searchButton = document.querySelector("#search-button");
// var pastSearch = document.querySelector("#past-search");
// var cityAndDate = document.querySelector("#city-date");
// var currentWeather = document.querySelector("#currentWeather");
// var currentTemp = document.querySelector("#current-temp");
// var currentWind = document.querySelector("#current-wind");
// var currentHumidity = document.querySelector("#current-humidity");
// var searchForm = document.querySelector("#search-form");
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

  fetch(getLonLat)
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
    });
 
}

function getWeather(data) {
  var getWeather =
    "https://api.openweathermap.org/data/3.0/onecall?lat=" +
    data.lat +
    "&lon=" +
    data.lon +
    "&exclude=minuetly,hourly&appid=" +
    apiKey;

  fetch(getWeather).then(function (data) {
    console.log(data);
  });
}

//

// .then(function (data) {
//   console.log(data);
//   getWeather(data);

// for (var i = 0; i < data.length; i++) {
//   console.log(data[i].name);
//   var cityNameData = data[i].name;
//   var lat = data[i].lat;
//   var lon = data[i].lon;
//   // const lonLatData = {
//   //   cityNameData: data[i].name,
//   //   lat: data[i].lat,
//   //   lon: data[i].lon,
//   // };
// }
// console.log(lon, lat, cityNameData);
//     });
// }

function getWeather() {
  var getWeather =
    "https://api.openweathermap.org/data/3.0/onecall?lat=" +
    data.lat +
    "&lon=" +
    data.lon +
    "&exclude=minuetly,hourly&appid=" +
    apiKey;

  fetch(getWeather).then(function (data) {
    console.log(data);
  });
}

searchButton.addEventListener("click", handleSubmit);
