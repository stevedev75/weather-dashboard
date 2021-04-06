

// http://api.openweathermap.org/data/2.5/forecast?q= + CITY NAME + &units=imperial&appid=b6ac08ddf42292bbdd1f3dae08ee40e4

//pseudo code:
//1. capture the city name in the text box upon click
//2. add that name into the URL for the API (above)
//3. also add that city name to local storage and create a button with the city name in it where the sample buttons are
//4 cycle through the returned JSON date and collect the items we want like temp, humidity, wind speed, and weather icon id
// it will take some sort of if/else and looping
// 5. "inject" the data into a. the appopriate spots on the "Today" (big part) of the page and b. do the same with the cards on the bottom of that section as well.


//when button clicked
//var cityName=document.getElementsByName('cityname');
//console.log(cityName);

//add city name to api address and fetch data

