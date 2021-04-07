var cityName = document.getElementById("city").value;
var currentCity = document.getElementById("curCity");
var currentTemp = document.getElementById("curTemp");
var currentHum = document.getElementById("curHum");
var currentWind = document.getElementById("curWind");
var currentUv = document.getElementById("curUv");
var subMit = document.getElementById("sbutton");
var form = document.getElementById("user-form");


console.log(cityName.value);

var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=b6ac08ddf42292bbdd1f3dae08ee40e4";

//subMit.addEventListener('click', function (e) {

form.addEventListener('submit', function (e) {    
    e.preventDefault();
     fetch(url).then(function (response) {
            if (response.ok) {
                return response.json();
                
    }})
        })


      
        console.log(form);
        //console.log(url);