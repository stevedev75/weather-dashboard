var form = document.getElementById("user-form");

var searchedCities = [];
var localStorageCities = JSON.parse(localStorage.getItem("searchedCities"));
if (localStorageCities) {
    searchedCities = localStorageCities;
}
/* START OF DISPLAY BUTTONS FUNCTION CODE*/
function displayButtons() {
    document.querySelector("#city-buttons").innerHTML="";
    for (let i = 0; i < searchedCities.length; i++) {
        const searchedCity = searchedCities[i];
        var cityButton = document.createElement("button");
        cityButton.textContent = searchedCity;
        cityButton.onclick = secondBtnSearch;
        document.querySelector("#city-buttons").appendChild(cityButton);
          };
    }
/* END OF DISPLAY BUTTONS FUNCTION CODE*/    

displayButtons();

function secondBtnSearch () {
        console.log("Click from second button");
        console.log(this);
        console.log(this.textContent);
        var cityName=this.textContent;
        var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=b6ac08ddf42292bbdd1f3dae08ee40e4";
        console.log(url);
        fetch(url).then(function (response) {
            response.json().then(function (data) {
                console.log(data);
       
    
                //current day weather details//
                var temp = data.list[0].main.temp;
                var TEMP0 = Math.round(temp);
                var humid = data.list[0].main.humidity;
                var wind = data.list[0].wind.speed;
                var WIND0 = Math.round(wind);
                var lat = data.city.coord.lat;
                console.log(lat);
                var lon = data.city.coord.lon;
                console.log(lon);
    
                var urlTwo = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=b6ac08ddf42292bbdd1f3dae08ee40e4";
                console.log("urlTwo= " + urlTwo);
    
    
                //Injects weather details from API into HTML//
                document.getElementById("curCity").innerHTML = (cityName);
                document.getElementById("curTemp").innerHTML = "Temperature: " + (TEMP0) + "F";
                document.getElementById("curHum").innerHTML = "Humidity: " + (humid) + "%";
                document.getElementById("curWind").innerHTML = "Wind: " + (WIND0) + "mph";
                var today = moment();
                $("#currentDay").text(today.format("MMM Do, YYYY"));
    
                
    
                var iconToday = data.list[0].weather[0].icon;
                console.log("iconToday= " + iconToday);
    
                var iconTodayPic = "http://openweathermap.org/img/wn/" + iconToday + ".png";
                console.log("iconTodayPic: " + iconTodayPic);
    
                document.getElementById("curCity").innerHTML += `<img src="${iconTodayPic}" alt="weather icon" />`;
    
    
    
                //Day One of 5 Day Forecast
                var tempOne = data.list[1].main.temp;
                // Here is how to round the numbers to save space in the cards//
                var TEMP1 = Math.round(tempOne);
                var humidOne = data.list[1].main.humidity;
                var iconOne = data.list[1].weather[0].icon;
                var iconPicOne = "http://openweathermap.org/img/wn/" + (iconOne) + ".png";
                document.getElementById("iconOne").innerHTML += `<img src="${iconPicOne}" alt="weather icon" />`;
                document.getElementById("tmpOne").innerHTML = "Temp " + (TEMP1) + "F";
                document.getElementById("humOne").innerHTML = "Humidity " + (humidOne) + "%";
                var tomorrow = moment().add(1,'days').format('MM/DD');
                document.getElementById("dayOne").innerHTML = tomorrow;
    
    
                //Day Two of 5 Day Forecast
                var tempTwo = data.list[2].main.temp;
                var TEMP2 = Math.round(tempTwo);
                var humidTwo = data.list[2].main.humidity;
                var iconTwo = data.list[2].weather[0].icon;
                
    
                document.getElementById("tmpTwo").innerHTML = "Temp " + (TEMP2) + "F";
                document.getElementById("humTwo").innerHTML = "Humidity " + (humidTwo) + "%";
    
                var iconTwo = data.list[2].weather[0].icon;
              
                var iconPicTwo = "http://openweathermap.org/img/wn/" + (iconTwo) + ".png";
               
                document.getElementById("iconTwo").innerHTML += `<img src="${iconPicTwo}" alt="weather icon" />`;
    
                var dayTwo= moment().add(2,'days').format('MM/DD');
                document.getElementById("dayTwo").innerHTML = dayTwo;
                
    
                //Day Three of 5 Day Forecast
                var tempThree = data.list[3].main.temp;
                var TEMP3 = Math.round(tempThree);
                var humidThree = data.list[3].main.humidity;
                var iconThree = data.list[3].weather[0].icon;
                console.log(iconThree);
    
                document.getElementById("tmpThree").innerHTML = "Temp " + (TEMP3) + "F";
                document.getElementById("humThree").innerHTML = "Humidity " + (humidThree) + "%";
    
                var iconThree = data.list[3].weather[0].icon;
                console.log(iconThree);
                var iconPicThree = "http://openweathermap.org/img/wn/" + (iconThree) + ".png";
                console.log(iconPicThree);
                document.getElementById("iconThree").innerHTML += `<img src="${iconPicThree}" alt="weather icon" />`;
    
                var dayThree= moment().add(3,'days').format('MM/DD');
                document.getElementById("dayThree").innerHTML = dayThree;
                console.log("DayThree= " + dayThree);
    
                //Day Four of 5 Day Forecast
                var tempFour = data.list[4].main.temp;
                var TEMP4 = Math.round(tempFour);
                var humidFour = data.list[4].main.humidity;
                console.log(humidFour);
                var iconFour = data.list[4].weather[0].icon;
                console.log(iconFour);
    
                document.getElementById("tmpFour").innerHTML = "Temp " + (TEMP4) + "F";
                document.getElementById("humFour").innerHTML = "Humidity " + (humidFour) + "%";
    
                var iconFour = data.list[4].weather[0].icon;
                var iconPicFour = "http://openweathermap.org/img/wn/" + (iconFour) + ".png";
                document.getElementById("iconFour").innerHTML += `<img src="${iconPicFour}" alt="weather icon" />`;
    
                var dayFour= moment().add(4,'days').format('MM/DD');
                document.getElementById("dayFour").innerHTML = dayFour;
            
    
                //Day Five of 5 Day Forecast
                var tempFive = data.list[5].main.temp;
                var TEMP5 = Math.round(tempFive);
                var humidFive = data.list[5].main.humidity;
                var iconFive = data.list[5].weather[0].icon;
    
                document.getElementById("tmpFive").innerHTML = "Temp " + (TEMP5) + "F";
                document.getElementById("humFive").innerHTML = "Humidity " + (humidFive) + "%";
    
                var iconFive = data.list[5].weather[0].icon;
                console.log(iconFive);
                var iconPicFive = "http://openweathermap.org/img/wn/" + (iconFive) + ".png";
                console.log(iconPicFive);
                document.getElementById("iconFive").innerHTML += `<img src="${iconPicFive}" alt="weather icon" />`;
    
                var dayFive= moment().add(5,'days').format('MM/DD');
                document.getElementById("dayFive").innerHTML = dayFive;
                console.log("DayFive= " + dayFive);
            
    
                var dateOne = moment();
                console.log("dateOne= " + dateOne);
    
    
              /* SECOND FETCH STATEMENT STARTS BELOW */    
                fetch(urlTwo).then(function (response) {
                    response.json().then(function (data) {
                        var uviCity = data.current.uvi;
                        console.log("uvi= " + uviCity);
                        document.getElementById("curUv").innerHTML = "UV Index: " + (uviCity);
    
                        if (uviCity < 3) {
                            document.getElementById("curUv").innerHTML = "<span style='color: green;'>" + "UV Index: " + uviCity + "</span>";
                        }
                        else if (uviCity > 2 && uviCity < 6) {
                            document.getElementById("curUv").innerHTML = "<span style='color: orange;'>" + "UV Index: " + uviCity + "</span>";
                        }
                        else {
                            document.getElementById("curUv").innerHTML = "<span style='color: red;'>" + "UV Index: " + uviCity + "</span>";
    
    
                        }
                    });
                });
            });
        })
};

/* secondBtnSearch(); */
/* __________________________________________________________________________*/

/* FIRST EVENT LISTENER*/
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var cityName = document.getElementById("city").value;
    console.log(cityName);

    var city = "city";
    var text = cityName;
    searchedCities.push(cityName)
    localStorage.setItem("searchedCities", JSON.stringify(searchedCities));
    displayButtons();


    console.log(city);
    console.log(text);

    /* FIRST FETCH STATEMENT STARTS BELOW*/

    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=b6ac08ddf42292bbdd1f3dae08ee40e4";
    console.log(url);
    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
   

            //current day weather details//
            var temp = data.list[0].main.temp;
            var humid = data.list[0].main.humidity;
            var wind = data.list[0].wind.speed;
            var lat = data.city.coord.lat;
            console.log(lat);
            var lon = data.city.coord.lon;
            console.log(lon);

            var urlTwo = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=b6ac08ddf42292bbdd1f3dae08ee40e4";
            console.log("urlTwo= " + urlTwo);


            //Injects weather details from API into HTML//
            document.getElementById("curCity").innerHTML = (cityName);
            document.getElementById("curTemp").innerHTML = "Temperature: " + (temp) + " F";
            document.getElementById("curHum").innerHTML = "Humidity: " + (humid) + " %";
            document.getElementById("curWind").innerHTML = "Wind: " + (wind) + " mph";
            var today = moment();
            $("#currentDay").text(today.format("MMM Do, YYYY"));

            

            var iconToday = data.list[0].weather[0].icon;
            console.log("iconToday= " + iconToday);

            var iconTodayPic = "http://openweathermap.org/img/wn/" + iconToday + ".png";
            console.log("iconTodayPic: " + iconTodayPic);

            document.getElementById("curCity").innerHTML += `<img src="${iconTodayPic}" alt="weather icon" />`;



            //Day One of 5 Day Forecast
            var tempOne = data.list[1].main.temp;
            console.log(tempOne);
            var humidOne = data.list[1].main.humidity;
            console.log(humidOne);

            var iconOne = data.list[1].weather[0].icon;
            console.log(iconOne);
            var iconPicOne = "http://openweathermap.org/img/wn/" + (iconOne) + ".png";
            console.log(iconPicOne);
            document.getElementById("iconOne").innerHTML += `<img src="${iconPicOne}" alt="weather icon" />`;
            document.getElementById("tmpOne").innerHTML = "Temp " + (tempOne) + " F";
            document.getElementById("humOne").innerHTML = "Humidity " + (humidOne) + " %";

            var tomorrow = moment().add(1,'days').format('MM/DD');
            document.getElementById("dayOne").innerHTML = tomorrow;
            console.log("tomorrow= " + tomorrow);


            //Day Two of 5 Day Forecast
            var tempTwo = data.list[2].main.temp;
            console.log(tempTwo);
            var humidTwo = data.list[2].main.humidity;
            console.log(humidTwo);
            var iconTwo = data.list[2].weather[0].icon;
            console.log(iconTwo);

            document.getElementById("tmpTwo").innerHTML = "Temp " + (tempTwo) + " F";
            document.getElementById("humTwo").innerHTML = "Humidity " + (humidTwo) + " %";

            var iconTwo = data.list[2].weather[0].icon;
            console.log(iconTwo);
            var iconPicTwo = "http://openweathermap.org/img/wn/" + (iconTwo) + ".png";
            console.log(iconPicTwo);
            document.getElementById("iconTwo").innerHTML += `<img src="${iconPicTwo}" alt="weather icon" />`;

            var dayTwo= moment().add(2,'days').format('MM/DD');
            document.getElementById("dayTwo").innerHTML = dayTwo;
            console.log("DayTwo= " + dayTwo);


            //Day Three of 5 Day Forecast
            var tempThree = data.list[3].main.temp;
            console.log(tempThree);
            var humidThree = data.list[3].main.humidity;
            console.log(humidThree);
            var iconThree = data.list[3].weather[0].icon;
            console.log(iconThree);

            document.getElementById("tmpThree").innerHTML = "Temp " + (tempThree) + " F";
            document.getElementById("humThree").innerHTML = "Humidity " + (humidThree) + " %";

            var iconThree = data.list[3].weather[0].icon;
            console.log(iconThree);
            var iconPicThree = "http://openweathermap.org/img/wn/" + (iconThree) + ".png";
            console.log(iconPicThree);
            document.getElementById("iconThree").innerHTML += `<img src="${iconPicThree}" alt="weather icon" />`;

            var dayThree= moment().add(3,'days').format('MM/DD');
            document.getElementById("dayThree").innerHTML = dayThree;
            console.log("DayThree= " + dayThree);

            //Day Four of 5 Day Forecast
            var tempFour = data.list[4].main.temp;
            console.log(tempFour);
            var humidFour = data.list[4].main.humidity;
            console.log(humidFour);
            var iconFour = data.list[4].weather[0].icon;
            console.log(iconFour);

            document.getElementById("tmpFour").innerHTML = "Temp " + (tempFour) + " F";
            document.getElementById("humFour").innerHTML = "Humidity " + (humidFour) + " %";

            var iconFour = data.list[4].weather[0].icon;
            console.log(iconFour);
            var iconPicFour = "http://openweathermap.org/img/wn/" + (iconFour) + ".png";
            console.log(iconPicFour);
            document.getElementById("iconFour").innerHTML += `<img src="${iconPicFour}" alt="weather icon" />`;

            var dayFour= moment().add(4,'days').format('MM/DD');
            document.getElementById("dayFour").innerHTML = dayFour;
            console.log("DayFour= " + dayFour);
        

            //Day Five of 5 Day Forecast
            var tempFive = data.list[5].main.temp;
            console.log(tempFive);
            var humidFive = data.list[5].main.humidity;
            console.log(humidFive);
            var iconFive = data.list[5].weather[0].icon;
            console.log(iconFive);

            document.getElementById("tmpFive").innerHTML = "Temp " + (tempFive) + " F";
            document.getElementById("humFive").innerHTML = "Humidity " + (humidFive) + " %";

            var iconFive = data.list[5].weather[0].icon;
            console.log(iconFive);
            var iconPicFive = "http://openweathermap.org/img/wn/" + (iconFive) + ".png";
            console.log(iconPicFive);
            document.getElementById("iconFive").innerHTML += `<img src="${iconPicFive}" alt="weather icon" />`;

            var dayFive= moment().add(5,'days').format('MM/DD');
            document.getElementById("dayFive").innerHTML = dayFive;
            console.log("DayFive= " + dayFive);
        

            var dateOne = moment();
            console.log("dateOne= " + dateOne);


          /* SECOND FETCH STATEMENT STARTS BELOW */    
            fetch(urlTwo).then(function (response) {
                response.json().then(function (data) {
                    var uviCity = data.current.uvi;
                    console.log("uvi= " + uviCity);
                    document.getElementById("curUv").innerHTML = "UV Index: " + (uviCity);

                    if (uviCity < 3) {
                        document.getElementById("curUv").innerHTML = "<span style='color: green;'>" + "UV Index: " + uviCity + "</span>";
                    }
                    else if (uviCity > 2 && uviCity < 6) {
                        document.getElementById("curUv").innerHTML = "<span style='color: orange;'>" + "UV Index: " + uviCity + "</span>";
                    }
                    else {
                        document.getElementById("curUv").innerHTML = "<span style='color: red;'>" + "UV Index: " + uviCity + "</span>";


                    }
                });
            });
        });
    })
})
