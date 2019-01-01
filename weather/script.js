$(document).ready(() => {

    console.log('jQ connected');

    $('#submit').click(e => {
        const num =  $('#zipcode').val();
          fetchWeather(num);
        });
  
    const fetchWeather = (zipCode) => {

      const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=0a1c6077653143999ddcc4382bcea8cf`
  
      fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          renderData(data);
      })
      .catch(error => console.log(error));
    //     .then(response => response.json())
    //     .then((data => { 
    //         console.log(data)
    //         renderData(data); 
        
    // })
    //     .catch((error) => console.log(error))
    // }
    }


 const renderData = (weather) => {

    const $cityName = $('<h2>').text(weather.name).appendTo('#result');
    const $temp = $('<h2>').text(weather.main.temp).appendTo('#result');
    const $minTemp = $('<h2>').text(weather.main.temp_min).appendTo('#result');
    const $maxTemp = $('<h2>').text(weather.main.temp_max).appendTo('#result');


  }

});