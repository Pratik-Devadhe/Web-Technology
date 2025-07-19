let searchbar = document.getElementById("searchbar");
let h1 = document.getElementById("h1");
let date = document.getElementById("date");
let wind = document.getElementById("wind");
let img = document.getElementById("img");
let temp = document.getElementById("temp");
let text = document.getElementById("text");
let humidity = document.getElementById("humidity");

async function getData() {

const loc = searchbar.value.trim();

    if (!loc) {
        alert("Please enter a city name.");
        return;
    }

let url = `http://api.weatherapi.com/v1/current.json?key=8596fb8cbdf34bb9b08113101251907&q=${loc}&aqi=yes`;

    try {
        let response = await fetch(url); // wait for the response
        let result = await response.json(); // wait for the JSON parsing

        h1.innerHTML = result.location.name;
        date.innerHTML = result.location.localtime;
        wind.innerHTML =  `wind : ${result.current.wind_kph} km/hr`;
        img.src = result.current.condition.icon;
        temp.innerHTML = `${result.current.temp_c}&nbsp;&deg;C`;
        text.innerHTML = result.current.condition.text;
        humidity.innerHTML = `Humidity : ${result.current.humidity}%`;

        console.log(result.current.temp_c , "o C");
        console.log(result.location.name);
        console.log("wind :" , result.current.wind_kph);
        console.log(result.current.condition.text);
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}