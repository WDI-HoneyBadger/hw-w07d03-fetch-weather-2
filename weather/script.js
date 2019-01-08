$(document).ready(() => {

        $('button').on('click', () => {
            $('#result').empty();
            $zipCode = $('#zipcode').val()
            makecall($zipCode);
        })

        const makecall = (zipCode) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=a9bfdaae31fa1aa7f7e9d30d888b7ca7`;
        
        fetch(url)
        .then(response => response.json())
        .then((data) => getData(data))
        .catch(error => console.log(error));
    }

        const getData = (data) => {
        const weatherData = {
            cityName: data.name,
            currentTemp: data.main.temp,
            weatherDescription: data.weather[0].description,
            minTemp: data.main.temp_min,
            maxTemp: data.main.temp_max
        }
             appendToDom(weatherData);
        }
      
        
        const appendToDom = (data) => {
            const $city = $("<h3>").text(data.cityName).appendTo($("#result"));
            const $temp = $("<p>").text("Current temp: " + data.currentTemp + " C").appendTo($("#result"));
            const $desc = $("<p>").text("Weather description: " + data.weatherDescription).appendTo($("#result"));
            const $minTemp = $("<p>").text("Min temp: " + data.minTemp + " C").appendTo($("#result"));
            const $maxTemp = $("<p>").text("Max temp: " + data.maxTemp + " C").appendTo($("#result"));
        }

}); 
