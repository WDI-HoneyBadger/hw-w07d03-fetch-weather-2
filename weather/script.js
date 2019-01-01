$(document).ready(() => {

    
    $('button').on('click', () =>{
        $('#result').empty();
       makecall($('#zipcode').val());
    })
    const makecall = (zipcode) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipcode}&units=imperial&appid=893ce18b746af898f5a5026204e9d002`;
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            renderData(data);
        })
        .catch(error => console.log(error));
    }

    const renderData = (city) => {
       const $cityName = $('<h2>').text(city.name).appendTo('#result'); 
       const $currentTemp = $('<h2>').text(city.main.temp).appendTo('#result'); 
       const $description = $('<h2>').text(city.weather.description).appendTo('#result'); 
       const $min = $('<h2>').text(city.main.temp_min).appendTo('#result'); 
       const $max = $('<h2>').text(city.main.temp_max).appendTo('#result'); 
    }


}); 
