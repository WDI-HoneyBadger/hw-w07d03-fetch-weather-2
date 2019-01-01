$(document).ready(() => {

    const appendToDom = (weatherData) => {
        $('#result').empty();
        $('<h3>').text('City name: '+weatherData.name).appendTo('#result');
        if (weatherData.current_temperature > 40) {
            $('html').css('background-color','#ff4d4d');
            $('body').css('background-color','#ff4d4d');
        }
        $('<p>').text('Current temperature: '+ weatherData.current_temperature + ' C').appendTo('#result');
        $('<p>').text('Weather description: '+ weatherData.weather_description).appendTo('#result');
        $('<p>').text('Min temp: '+ weatherData.min_temp + ' C').appendTo('#result');
        $('<p>').text('Max temp: '+ weatherData.max_temp + ' C').appendTo('#result');
        $('<p>').text('Latitude: '+ weatherData.latitude).appendTo('#result');
        $('<p>').text('Longitude: '+ weatherData.longitude).appendTo('#result');
        $('<p>').text('Humidity: '+ weatherData.humidity).appendTo('#result');
        $('<p>').text('Wind speed: '+ weatherData.wind_speed).appendTo('#result');
    }

    const makeCall = () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=metric&appid=51dd9e9ad7e916d691e13198b0573be0`;

        fetch(url)
            .then(response => response.json())
            .then(data => getData(data))
            .catch(error => console.log(error)) 
    }

    const getData = (allData) => {
        const data = {
            'name': allData.name,
            'current_temperature': allData.main.temp ,
            'weather_description': allData.weather[0].description,
            'min_temp': allData.main.temp_min,
            'max_temp': allData.main.temp_max,
            'latitude': allData.coord.lat,
            'longitude': allData.coord.lon,
            'humidity': allData.main.humidity,
            'wind_speed': allData.wind.speed
        }
        appendToDom(data);
    }

    $('#submit').click(()=>{
        makeCall($('#zipcode').val());
    });
});