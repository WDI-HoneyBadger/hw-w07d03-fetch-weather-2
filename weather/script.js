$(document).ready(() => {
    console.log('jQ Connected!');

    $('#submit').click(() => {
        $('#result').empty();
        makeCall($('#zipcode').val());
    });


    const makeCall = (zipCode) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode}&appid=701759b1d18271fc4b575f09332e1c84&units=imperial`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            hendleZipCode(data)})
        .catch(error => console.log(error));
    };

    const hendleZipCode = (dataWeather) => {
        const $cityName = $('<h2>').text(dataWeather.name).appendTo('#result');
        const $temperature = $('<h2>').text(dataWeather.main.temp).appendTo('#result');
        const $description = $('<h2>').text(dataWeather.weather[0].description).appendTo('#result');
        const $mainTemp = $('<h2>').text(dataWeather.main.temp_min).appendTo('#result');
        const $maxTemp = $('<h2>').text(dataWeather.main.temp_max).appendTo('#result');
    }

}); 
