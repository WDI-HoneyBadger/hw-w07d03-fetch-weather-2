$(document).ready(() => {

    console.log("jQ connected!");



   



}); 

const getData =(zipUrl) =>{
       
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + zipUrl +"&units=metric&appid=677acf97a74e281e032bd0b19a100237";

    fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data);
        console.log(data.main.temp, data.main.temp_max, data.main.temp_min, data.name, data.weather[0].description);
        appendToDom(data.main.temp, data.main.temp_max, data.main.temp_min, data.name, data.weather[0].description);
    })

    .catch(error => console.log("Error occured! ", error));
}



const makeCall = () =>{

    const zipCode = $('#zipcode').val();

    getData(zipCode);


   
}

const appendToDom = (temp, temp_max, temp_min, name, weatherDes) =>{

    const $container =  $('<div>').appendTo('#result');
    const $temp = $('<p>').text("Temperature: " + temp).appendTo($container);
    const $temp_max = $('<p>').text("Max temperature: "+temp_max).appendTo($container);
    const $temp_min = $('<p>').text("Min temperature: " + temp_min).appendTo($container);
    const $name = $('<p>').text("City Name: " + name).appendTo($container);
    const $weather = $('<p>').text("Weather Description: "+weatherDes).appendTo($container);


}