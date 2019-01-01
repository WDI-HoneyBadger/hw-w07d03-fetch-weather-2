$(document).ready(() => {
    console.log('jQ Connected!');

    $('#submit').click(() => {
        makeCall($('zipcode').val());

    });

    const makeCall = (zipCode) => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=01c277731622cb4e2c8058fb4a5f62c1';





        fetch(url)
            .then((response) => response.json())

            .then((data) => {
                renderZipCode(data);
            })
            .catch((error) => console.log(error));
    }

}



cost renderZipCode = (weather) => {
        const $cityName = $('<h2>').text(weather.name).appendTo('#result');
        const $temperature = $('<h2>').text(weather.main.temp).appendTo('#result');
        const $minTemp = $('<h2>').text(weather.main.temp_min).appendTo('#results');
        const $maxTemp = $('<h2>').text(weather.main.temp_max).appendTo('#results');
    });
// Complete the event listener
// Fill in the makeCall() function








// 01c277731622cb4e2c8058fb4a5f62c1