var currentCity = document.getElementById("curCity");
var currentTemp = document.getElementById("curTemp");
var currentHum = document.getElementById("curHum");
var currentWind = document.getElementById("curWind");
var currentUv = document.getElementById("curUv");
var subMit = document.getElementById("sbutton");
var form = document.getElementById("user-form");


form.addEventListener('submit', function (e) {    
    e.preventDefault();
    var cityName = document.getElementById("city").value;
    console.log(cityName);

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=b6ac08ddf42292bbdd1f3dae08ee40e4";
    console.log(url);

    fetch(url).then(function (response) {
            if (response.ok) {
                return response.json();
                }   
            })       
        })