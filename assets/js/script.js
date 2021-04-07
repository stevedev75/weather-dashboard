var cityName = document.getElementById("city").value;
var currentCity = document.getElementById("curCity");
var currentTemp = document.getElementById("curTemp");
var currentHum = document.getElementById("curHum");
var currentWind = document.getElementById("curWind");
var currentUv = document.getElementById("curUv");
var subButton = document.getElementsByClassName("btn");
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=b6ac08ddf42292bbdd1f3dae08ee40e4";

subButton.addEventListener('click', function (e) {
    e.preventDefault();
    fetch(url).then(function (response) {
            if (response.ok) {
                return response.json();
    }})
        })
