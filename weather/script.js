$(document).ready(() => {

const makeCall = () => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?zip=99501,us&appid=a9e0c0d255134bb8a48493d90bac23d0';
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        // let  name = data.name 
        // let  weatherMain = data.main;
        // let  weatherDescription = data.weather;
         console.log(tempData);
        })
        .catch(error => {
          console.log(error);
        })
    }

    
      const appendToDom = (weather) => {
        const $result = $('<div>').appendTo($('.result'));
        const $name = $('<h2>').text(weather.name).appendTo($result);
        const $temp = $('<p>').text(weather.main.temp).appendTo($result);
        const $description = $('<p>').text(weather.weather.description).appendTo($result);
        const $temp_min = $('<p>').text(weather.main.temp_min).appendTo($result);
        const $temp_max = $('<p>').text(weather.main.temp_max).appendTo($result);
        
    
        
        
      }
    
      $( ".submit" ).click(function() {
        makeCall();
    });
      
    
    
    });
    





}); 
