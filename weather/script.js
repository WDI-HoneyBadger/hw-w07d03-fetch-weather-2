$(document).ready(() => {




$('#submit').click(() => {
    $('#result').empty();
    makeCall($('#zipcode').val());
});

const makeCall = (zipcode) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=d119d44c1e59033a0096e4d5cbed97b3`;
    fetch(url)
    .then(response => response.json())
    .then(data => getData(data))
    .catch(error => console.log(error))
    
}


const getData = (zipcode) => {

    const $name = $('<h2>').text('Name: '+zipcode.name).appendTo('#result');
    const $temperature = $('<h2>').text('Temperature: '+zipcode.main.temp).appendTo('#result');
    const $description = $('<h2>').text('Description: '+zipcode.weather[0].description).appendTo('#result');
    const $MinTemp = $('<h2>').text('MinTemp: '+zipcode.main.temp_min).appendTo('#result');
    const $MaxTemp = $('<h2>').text('MaxTemp: '+zipcode.main.temp_max).appendTo('#result');
    
    
}





}); 
