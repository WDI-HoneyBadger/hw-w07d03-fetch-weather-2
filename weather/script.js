$(document).ready(() => {
    const $weatherAPIkey = ''; //Enter your weather API key

    $('#submit').click(() => {
        const $zipcode = $('#zipcode').val();
        $('#result').empty();
        makeCall($zipcode);
    })

    const makeCall = (zip) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${zip},us&units=imperial&appid=${$weatherAPIkey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => getData(data))
            .catch(error => console.log('*** makeCall function Error ***', error))
    }

    const getData = (data) => {
        const $cityName = data.name;
        const $temp = data.main.temp;
        const $description = data.weather[0].description;
        const $min_temp = data.main.temp_min;
        const $max_temp = data.main.temp_max;
        appendToDom($cityName,$temp,$description,$min_temp,$max_temp);
    }

    const appendToDom = (city,temp,description,min_temp,max_temp) => {
        $('<h5>').text(`City: ${city}`).appendTo($('#result'));
        $('<p>').text(`Temperature: ${temp} ºF`).appendTo($('#result'));
        $('<p>').text(`description`).appendTo($('#result'));
        $('<p>').text(`Min temp: ${min_temp}`).appendTo($('#result'));
        $('<p>').text(`Max temp: ${max_temp}`).appendTo($('#result'));
    }

}); 