$(document).ready(() => {

    $('#submit').click(() => {
        makeCall($('#zipcode').val());
        $('#result').empty();
    })

    const makeCall = (zipcode) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipcode},us&units=imperial&appid=786b8a5caa74509b4b55d700ba5c7efc`;

        fetch (url)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            renderData(data);
        })
        .catch(error => console.log(error));
    }
    
    const renderData = (current) => {
        const $cityName = $('<h2>').text(current.name).appendTo('#result');
        const $currentTemp = $('<h2>').text(current.main.temp).appendTo('#result');
        const $description = $('<h2>').text(current.weather[0].description).appendTo('#result');
        const $min = $('<h2>').text(current.main.temp_min).appendTo('#result');
        const $max = $('<h2>').text(current.main.temp_max).appendTo('#result'); 
    }


}); 
