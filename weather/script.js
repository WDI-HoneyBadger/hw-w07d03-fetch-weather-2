$(document).ready(() => {


$('#submit').click(() =>{
$('#result').empty();
makeCall($('#zipcode')).val()


}); 

const makeCall=(zipcode)=>{
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=70124,us&units=imperial&appid=7375257e9cbb8c0b3aad72599de08284';
    fetch(url)
    .then(response=>response.json())
    .then(data=>getData(data))
    .catch(error=>console.log(error))

}
const getData=(zipcode)=>{
const $name = $('<h2>').text('Name'+zipcode.name).append('#result')
const $temp = $('<h2>').text('Temperature'+zipcode.main.temp).append('#result')
const $description = $('<h2>').text('Description: '+zipcode.weather[0].description).appendTo('#result');
const $minTemp = $('<h2>').text('MinTemp: '+zipcode.main.temp_min).appendTo('#result');
 const $maxTemp = $('<h2>').text('MaxTemp: '+zipcode.main.temp_max).appendTo('#result');



}

})
