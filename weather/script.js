$(document).ready(() => {
$('#submit').click(()=>{
    $('#result').empty();
    makeCall($('#zipcode').val());
});
const makeCall =(zipCode)=>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode}&appid=ba12554b5e959f6882661cb8859f5567&units=imperial`;
    fetch(url)
    .then(Response=> Response.json())
    .then(data=> {
        console.log(data)
        hendleZipCode(data)})
        .catch(error=> console.log(error));

        
      
    };

    const hendleZipCode= (dataWeather) =>{
        const $container = $('<div>').appendTo($('.weather-list'));
     const  $city = $('<h2>').text('City Name: '+dataWeather.name).appendTo('#result');
     const  $countryName = $('<h2>').text("Country: "+dataWeather.sys.country).appendTo('#result');
     const  $latLon= $('<h2>').text("Latitude: "+dataWeather.coord.lat ).appendTo('#result');
     const  $longitude= $('<h2>').text("Longitude: "+dataWeather.coord.lon ).appendTo('#result');
     const  $humidity = $('<h2>').text('Humidity: '+ dataWeather.main.humidity).appendTo('#result');
     const  $temperature = $('<h2>').text('Temp: '+dataWeather.main.temp+"°C").appendTo('#result');
     const  $pressure = $('<h2>').text('Pressure: '+ dataWeather.main.pressure).appendTo('#result');
     const  $descraption = $('<h2>').text('Description: '+ dataWeather.weather[0].description).appendTo('#result');
     const  $icon = $('<h2>').text('Icon: '+ dataWeather.weather[0].icon).appendTo('#result');
     const  $windSpeed = $('<h2>').text('Wind speed: '+dataWeather.wind.speed).appendTo('#result');
     const  $mainTemp = $('<h2>').text('Main Temp: '+dataWeather.main.temp_min+"°C").appendTo('#result');
     const  $maxTemp = $('<h2>').text('Max Temp: '+dataWeather.main.temp_max+"°C").appendTo('#result');

}
}); 
