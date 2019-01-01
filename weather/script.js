$(document).ready(() => {

    // postman link http://api.openweathermap.org/data/2.5/weather?q=70124,us&units=imperial&appid=76a1a558003f7e09ab7594e310aadfcb

    // Complete the event listener
$('button').on('click', () => {
$('#result').empty();
$zipCode = $('#zipcode').val()
makeCall($zipCode);
})
    //Fill in the makeCall() function
    const makeCall = (zipCode) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode},us&units=imperial&appid=76a1a558003f7e09ab7594e310aadfcb`

        fetch(url)
        .then(response => response.json())
        .then(data => getData(data))
        .catch(error => console.log(error))
    }

    //Finish the getData() function
const getData = (data) => {
    const weatherData = {
        cityName: data.name,
        currentTemp: data.main.temp,
        wethDescrip: data.weather[0].description,
        minTemp:data.main.temp_min,
        maxTemp:data.main.temp_max
    }
    appendToDom(weatherData);
}
    //Complete the appendToDom() function
const appendToDom = (data) => {
const $container = $('<div>').appendTo($('.container'));
const $cityName = $('<h3>').text('City Name:' + data.cityName).appendTo($container);
const $currentTemp = $('<h3>').text('Current temperature:' + data.currentTemp).appendTo($container);
const $weatherDescrip = $('<h3>').text('Weather Description:' + data.wethDescrip).appendTo($container);
const $minTemp = $('<h3>').text('Min temp:' + data.minTemp).appendTo($container);
const $maxTemp = $('<h3>').text('Max temp:' + data.maxTemp).appendTo($container);
    }
   
}); 
