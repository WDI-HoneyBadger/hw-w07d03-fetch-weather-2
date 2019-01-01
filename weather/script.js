$(document).ready(() => {
    console.log('jQuery connected!');
    const zipValue = () => {
        const $zipCode = $('#zipcode').val();

        makeCall($zipCode);
    }

    const makeCall = (id) => {
        const apiKey = '9d8b93a64699c17d4d9462c9377a734f';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${id},us&units=metric&appid=${apiKey}`

        fetch(url)
            .then(response => response.json())
            .then(getData)
            .catch(error => console.log(error))
    }

    const getData = (data) => {
        const weatherObj = {
            name: data.name,
            currentTemp: data.main.temp,
            description: data.weather[0].description,
            maxTemp: data.main.temp_max,
            minTemp: data.main.temp_min
        }
        appendToDom(weatherObj )
    }

    const appendToDom = (weather) =>{
        const $container = $('<div>').appendTo($('#result'));
        const $name = $('<h2>').text('City Name: ' + weather.name).appendTo($container);
        const $temp = $('<h3>').text('Current Temperature: '  + weather.currentTemp + '\xBA').appendTo($container);
        const $desc = $('<h3>').text('Weather: ' + weather.description).appendTo($container);
        const $tempM = $('<p>').text('Max Temperature: ' + weather.maxTemp + '\xBA').appendTo($container);
        const $tempN = $('<p>').text('Min Temperature: ' + weather.minTemp + '\xBA').appendTo($container);
        

    }

    $('#submit').click(zipValue);
}); 
