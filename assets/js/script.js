var currentTemp = document.getElementById("curTemp");
//var currentHum = document.getElementById("curHum");
var currentWind = document.getElementById("curWind");
var currentUv = document.getElementById("curUv");
var subMit = document.getElementById("sbutton");
var form = document.getElementById("user-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var cityName = document.getElementById("city").value;
    console.log(cityName);

    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=b6ac08ddf42292bbdd1f3dae08ee40e4";
    console.log(url);
    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            var temp = data.list[0].main.temp;
            console.log(temp);
            var humid = data.list[0].main.humidity;
            console.log(humid);
            var wind = data.list[0].wind.speed;
            console.log(wind);
            var icon = data.list[0].weather[0].icon;
            console.log(icon);
            var lat = data.city.coord.lat;
            console.log(lat);
            var lon = data.city.coord.lon;
            console.log(lon);


            document.getElementById("curCity").innerHTML = (cityName);
            document.getElementById("curTemp").innerHTML = "Temperature: " + (temp) + " F";
            document.getElementById("curHum").innerHTML = "Humidity: " + (humid) + " %";
            document.getElementById("curWind").innerHTML = "Wind: " + (wind) + " mph";
           
            var iconPic = "http://openweathermap.org/img/wn/" + icon +".png";
            console.log(iconPic);
            
            var today = moment();
            $("#currentDay").text(today.format("MMM Do, YYYY"));



        });
    })
})


