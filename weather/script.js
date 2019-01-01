$(document).ready(() => {
    console.log('ready to rock!!')
    
        $('button').click(() => {  
            $('#result').empty();      
            makeCall($('#zipcode').val());
        });


    const makeCall = (zipCode) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode},us&units=imperial&appid=95e7d762db2901ee8a467411ab6c041c`;

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                getData(data);
            })
            .catch(err => console.log(err))
    }

    const getData = (zipCode) => {
        const $cityName = $('<h3>').text(zipCode.name).appendTo('#result');
        const $currTemp = $('<h3>').text(zipCode.main.temp).appendTo('#result');
        const $weatherDes = $('<h3>').text(zipCode.weather[0].description).appendTo('#result');
        const $minTemp = $('<h3>').text(zipCode.main.temp_max).appendTo('#result');
        const $maxTemp = $('<h3>').text(zipCode.main.temp_min).appendTo('#result');
    }


    //don't write anything after this point
}); 
