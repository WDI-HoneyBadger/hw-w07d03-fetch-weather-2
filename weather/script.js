$(document).ready(() => {
    console.log('jQ Connected!');

    $('#submit').click(() => {
        $('#result').empty();
        makecall($('#zipcode').val());
    });

    const makecall = (zipCode) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode}&units=imperial&appid=a9bfdaae31fa1aa7f7e9d30d888b7ca7`;
        fetch(url)
            .then(response => response.json())
            .then((data) => getData(data))
            .catch(error => console.log(error));
    }
    const getData = (data) => {
         city = data.name;
         temp = data.main.temp;
         description2 = data.weather[0].description;
         min = data.main.temp_min;
         max = data.main.temp_max;
        appendToDom(city,temp,description2,min,max);
    }


    ///////////////////////
    

    const appendToDom = (city,temp,description2,min,max) => {
        $('<h3>').text(`City  : ${city}`).appendTo('#result');
        $('<h3>').text(`temperature : ${temp}`).appendTo('#result');
         $('<h3>').text(`Weather description :  ${description2}`).appendTo('#result');
         $('<h3>').text(`Min :  ${min}`).appendTo('#result');
         $('<h3>').text(`Max :  ${max}`).appendTo('#result');
    }


}); 
