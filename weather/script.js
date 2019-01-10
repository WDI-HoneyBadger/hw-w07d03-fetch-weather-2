$(document).ready(() => {
    console.log('JQ Connected!');

    $('button').on('click', () =>{
        $('#result').empty();
       makecall($('#zipcode').val());
    })
   // this a test 
    const makecall =(zipcode) => {
        const url =`http://api.openweathermap.org/data/2.5/weather?q=${zipcode}&units=imperial&appid=de601f137a5b9e31385c2ee6d540f0f4`;
        
        fetch(url)


        .then(response => response.json())
        .then((data) => {
            console.log(data)
            getData(data);
        })
        
        .catch(error => console.log(error));
    }

    
    const getData = (city) => {
       const $cityName = $('<h2>').text(city.name).appendTo('#result');
       const $weatherInfo= $('<h2>').text(city.weather[0].weatherInfo).appendTo('#result');  
       const $currentTemp = $('<h2>').text(city.main.temp).appendTo('#result'); 
       const $minTemp = $('<h2>').text(city.main.temp_min).appendTo('#result'); 
       const $maxTemp = $('<h2>').text(city.main.temp_max).appendTo('#result'); 
    }
}); 
