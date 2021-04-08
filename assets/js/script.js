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
            //current day weather details//
            var temp = data.list[0].main.temp;
            var humid = data.list[0].main.humidity;
            var wind = data.list[0].wind.speed;
            var icon = data.list[0].weather[0].icon;
            var lat = data.city.coord.lat;
            console.log(lat);
            var lon = data.city.coord.lon;
            console.log(lon);

            //Injects weather details from API into HTML//
            document.getElementById("curCity").innerHTML = (cityName);
            document.getElementById("curTemp").innerHTML = "Temperature: " + (temp) + " F";
            document.getElementById("curHum").innerHTML = "Humidity: " + (humid) + " %";
            document.getElementById("curWind").innerHTML = "Wind: " + (wind) + " mph";
            var today = moment();
            $("#currentDay").text(today.format("MMM Do, YYYY"));

            var iconPic = "http://openweathermap.org/img/wn/" + icon + ".png";
            console.log(iconPic);

            //Day One of 5 Day Forecast
            var tempOne = data.list[1].main.temp;
            console.log(tempOne);
            var humidOne = data.list[1].main.humidity;
            console.log(humidOne);
            var iconDOne = data.list[1].weather[0].icon;
            console.log(iconOne);
            var iconPic1 = "http://openweathermap.org/img/wn/" + (iconOne) + ".png";
            console.log(iconPic1);

            document.getElementById("tmpOne").innerHTML = "Temp: " + (tempOne) + " F";
            document.getElementById("humOne").innerHTML = "Humidity: " + (humidOne) + " %";
            // document.getElementById("iconOne").innerHTML = ((inconPic) + (inconOne) + ".png");

            //Day Two of 5 Day Forecast
            var tempTwo = data.list[2].main.temp;
            console.log(tempTwo);
            var humidTwo = data.list[2].main.humidity;
            console.log(humidTwo);
            var iconTwo = data.list[2].weather[0].icon;
            console.log(iconTwo);

            document.getElementById("tmpTwo").innerHTML = "Temp: " + (tempTwo) + " F";
            document.getElementById("humTwo").innerHTML = "Humidity: " + (humidTwo) + " %";
            //getElementById("iconOne").innerHTML = ((inconPic) + (inconTwo) + ".png");

            //Day Three of 5 Day Forecast
            var tempThree = data.list[3].main.temp;
            console.log(tempThree);
            var humidThree = data.list[3].main.humidity;
            console.log(humidThree);
            var iconThree = data.list[3].weather[0].icon;
            console.log(iconThree);

            document.getElementById("tmpThree").innerHTML = "Temp: " + (tempThree) + " F";
            document.getElementById("humThree").innerHTML = "Humidity: " + (humidThree) + " %";
            //getElementById("iconOne").innerHTML = ((inconPic) + (inconThree) + ".png");

            //Day Four of 5 Day Forecast
            var tempFour = data.list[4].main.temp;
            console.log(tempFour);
            var humidFour = data.list[4].main.humidity;
            console.log(humidFour);
            var iconFour = data.list[4].weather[0].icon;
            console.log(iconFour);

            document.getElementById("tmpFour").innerHTML = "Temp: " + (tempFour) + " F";
            document.getElementById("humFour").innerHTML = "Humidity: " + (humidFour) + " %";
            //getElementById("iconOne").innerHTML = ((inconPic) + (inconFour) + ".png");

             //Day Five of 5 Day Forecast
             var tempFive = data.list[5].main.temp;
             console.log(tempFive);
             var humidFive = data.list[5].main.humidity;
             console.log(humidFive);
             var iconFive = data.list[5].weather[0].icon;
             console.log(iconFive);
 
             document.getElementById("tmpFive").innerHTML = "Temp: " + (tempFive) + " F";
             document.getElementById("humFive").innerHTML = "Humidity: " + (humidFive) + " %";
             //getElementById("iconOne").innerHTML = ((inconPic) + (inconFour) + ".png");


            //how to get relative time from current day for each of the next 5 days?
            // var dateOne = moment();
            // $("#dayOne").text(dateOne.format("MMM Do, YYYY"));




        });
    })
})


