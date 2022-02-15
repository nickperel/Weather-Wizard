const apiKey = "4e8ea4c48fc1caa38029a76e8f4dcc2b";

function weatherDash() {
    const inputEl = document.getElementById("city-input");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    let pastSearches = JSON.parse(localStorage.getItem("search")) || [];
    console.log(pastSearches);

function getWeather(cityName) {

    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
        console.log("is this working?")
    })
    .then(function (data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].local_names.ja);
        }
    });
  };

};

weatherDash();