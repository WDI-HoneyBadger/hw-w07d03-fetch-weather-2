$(document).ready(() => {
    console.log('jQ Connected!');

    $('#submit').click(() => {
        $('#result').empty();
        makeCall($('#zipcode').val());
    });


    const makeCall = (zipCode) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode}&appid=ad60f32cd784eaf9e16e2ce25d3859c2&units=imperial`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            hendleZipCode(data)})
        .catch(error => console.log(error));
    };

    const hendleZipCode = (dataWeather) => {
        const $cityName = $('<h2>').text('Name: '+dataWeather.name).appendTo('#result');
        const $temperature = $('<h2>').text('temperature: '+dataWeather.main.temp).appendTo('#result');
        if(dataWeather.main.temp >90){
            $temperature.css('color','red')
        } else if (dataWeather.main.temp < 40){
            $temperature.css('color','blue')
        }
        const $description = $('<h2>').text('description: '+dataWeather.weather[0].description).appendTo('#result');
        const $mainTemp = $('<h2>').text('main Temp: '+dataWeather.main.temp_min).appendTo('#result');
        const $maxTemp = $('<h2>').text('max Temp: '+dataWeather.main.temp_max).appendTo('#result');
        const $latitude = $('<h2>').text('latitude: '+dataWeather.coord.lat).appendTo('#result');
        const $longitude = $('<h2>').text('longitude: '+dataWeather.coord.lon).appendTo('#result');
        const $humidity = $('<h2>').text('humidity: '+dataWeather.main.humidity).appendTo('#result');
        const $precipitation = $('<h2>').text('precipitation: '+dataWeather.base).appendTo('#result');
        const $windSpeed = $('<h2>').text('windSpeed: '+dataWeather.wind.speed).appendTo('#result');
        const $icon = $('<img>').appendTo('#result');
        const $icon2 = $('<i>').addClass('fas fa-igloo').appendTo('#result');
        $icon.attr('src', 'http://openweathermap.org/img/w/' + dataWeather.weather[0].icon + '.png');
        const today = new Date()
        const hours = today.getHours()

        if (hours < 12)$('body,html').css('background-color','cornflowerblue')
            else if (hours < 18)$('body,html').css('background-color','gold')
                else $('body,html').css('background-color','NAVY')
        
    }

}); 