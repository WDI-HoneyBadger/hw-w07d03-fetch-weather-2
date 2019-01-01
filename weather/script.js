$(document).ready(() => {

    let zipcode = 0;

    const appendToDom = (weatherInfo) => {
        $("<h1>").text(weatherInfo.cityName).appendTo($("#result"));
        $("<p>").text("°" + weatherInfo.temp + " C").appendTo($("#result"));
        $("<p>").text("Description: " + weatherInfo.description).appendTo($("#result"));
        $("<p>").text("Minimum temp: " + "°" + weatherInfo.minTemp + " C").appendTo($("#result"));
        $("<p>").text("Maximum temp: " + "°" + weatherInfo.maxTemp + " C").appendTo($("#result"));
    }
    
    const handleData = (weatherData) => {
        const weatherInfo = {
            cityName: weatherData.name,
            temp: weatherData.main.temp,
            description: weatherData.weather[0].description,
            minTemp: weatherData.main.temp_min,
            maxTemp: weatherData.main.temp_max
        }
        appendToDom(weatherInfo);
    }

    

    const makeCall = (zipCode) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode},us&units=metric&appid=0093f5c9f9847f340d4ffb453c1a258d`;
        fetch(url)
        .then(response => response.json())
        .then(data => handleData(data))
        .catch(error => console.log(error))
    }

    $("#submit").on("click", () => {
        zipcode = $("#zipcode").val();
        console.log(zipcode);
        makeCall(zipcode);
    })
    
});