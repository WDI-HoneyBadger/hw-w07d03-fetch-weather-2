$(document).ready(() => {
    console.log('is conncted');


    $('#submit').click(() => {        
        fetchZipcode($('#zipcode').val());
    });


    const fetchZipcode = (zipCode)=>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode}&appid=ecf66ebdd73c36fe10da045bcad837db&units=imperial`;
        

        fetch(url)
        .then((response)=>response.json())
        
        .then((data)=> {
            console.log(data);
            handelZipcode(data);
        })
        .catch((error)=> console.log(error));
        

    }

    const handelZipcode = (zip)=>{
        
        const $Cityname = $('<h3>').text(zip.name).appendTo('#result');
        const $Currenttemperature = $('<h4>').text(zip.main.temp).appendTo('#result');
        const $Weatherdescription = $('<h3>').text(zip.weather[0].description).appendTo('#result');
        const Mintemp = $('<h3>').text(zip.main.temp_max).appendTo('#result');
        const Maxtemp = $('<h3>').text(zip.main.temp_min).appendTo('#result');




    }





}); 
