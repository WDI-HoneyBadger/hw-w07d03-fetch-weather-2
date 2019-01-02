$(document).ready(() => {

const makeCall = (zipCode) => {
    const url =`http://samples.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=7e319bfee670f8b1f1af3e58048597e5`;
    fetch(url)
    .then(response => response.json())
    .then((data) => getData(data))
    .catch(error => console.log(error));
}

const getData = (data) => {
    const weatherData = {
        cityName: data.name,
        currentTemp: data.main.temp,
        weatherDescription: data.weather[0].description,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max
    }
         appendToDom(weatherData);
    }

    const appendToDom = (data) => {
        const $city = $("<h3>");
        $city.text(data.cityName).appendTo($("#result"));
        const $temp = $("<p>");
        $temp.text("Current temp: " + data.currentTemp + " C").appendTo($("#result"));
        const $desc = $("<p>");
        $desc.text("Weather description: " + data.weatherDescription).appendTo($("#result"));
        const $minTemp = $("<p>");
        $minTemp.text("Min temp: " + data.minTemp + " C").appendTo($("#result"));
        const $maxTemp = $("<p>");
       $maxTemp .text("Max temp: " + data.maxTemp + " C").appendTo($("#result"));
    }

$('button').on('click', () => {
    $('#result').empty();
    $zipCode = $('#zipcode').val()
    makeCall($zipCode);
})

}); 

