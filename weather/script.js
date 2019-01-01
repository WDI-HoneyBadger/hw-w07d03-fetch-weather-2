$(document).ready(() => {
    console.log('jQ Connected!')

    // $('#submit').click(() => {
    //     makeCall(zip.val())
    // })

    $('button').one('click', () => {
        let zip = $('#zipcode').val();
        makeCall(zip); 
       })

    const makeCall = (id) => {

        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${id}&appid=107eb85fd837d4501cf5d60f254d18b9`;

        fetch(url)
        .then(response => response.json())
        .then(data => renderWeather(data))
        .catch(error => console.log(error))
    }


const renderWeather = (weather) => {
    
    const $CityName = $('<p>').text(weather.name).appendTo('#result');
    const $temp = $('<p>').text(weather.main.temp).appendTo('#result');
    const $description = $('<p>').text(weather.weather[0].description).appendTo('#result');
    const $temp_min = $('<p>').text(weather.main.temp_min).appendTo('#result');
    const $temp_max = $('<p>').text(weather.main.temp_max).appendTo('#result');
    
}

}); 