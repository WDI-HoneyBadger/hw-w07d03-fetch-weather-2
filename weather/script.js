$(document).ready(() => {

    $('#submit').click(() => {
        makeCall($('#zipcode').val());
    })


    const makeCall = (zipCode) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode}&appid=2286ef9147c86be5ad6d5e2c85691bdf&units=imperial`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                getData(data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const getData = (zip) => {


const $cityName = $('<h2>').text(`City: ${zip.name}`).appendTo('#result');
const $currentTemperature = $('<h2>').text(`Current Temperature: ${zip.main.temp}`).appendTo('#result');
const $weatherDescription = $('<h2>').text(`Weather: ${zip.weather[0].description}`).appendTo('#result');
const $minTemp = $('<h2>').text(`Min Temperature: ${zip.main.temp_max}`).appendTo('#result');
const $maxTemp = $('<h2>').text(`Max Temperature: ${zip.main.temp_min}`).appendTo('#result');


}



});

