$(document).ready(() => {
    console.log("you are beautiful")

    $('#submit').click(e => {
        $('#result').empty()
        const num = $('#zipcode').val();
        makeCall(num);
    });

    const makeCall = (zipCode) => {

        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=e6ed8d551a8b3f095477b7bd887962a0`

        fetch(url)
            .then(response => response.json())
            .then(data => { getData(data); })
            .catch(error => console.log(error));



        const getData = (weather) => {
            console.log(weather)
            const $newp = $('<div>')
            const $divc = $('<div>').addClass('divc')
            const $temp = $('<h2>').addClass('temp')
            const $icon = $('<img>')
            const $name = $('<h4>')
            const $maxTemp = $('<h2>')
            const $minTemp = $('<h2>')
            const $latitude = $('<h2>')
            const $longitude = $('<h2>')
            const $precipitation = $('<h2>')
            const $windspeed = $('<h2>')
            const $humidity = $('<h2>')
            const $description = $('<h2>')            
            const $icon2 = $('<i>').addClass('fas fa-igloo')
            weather.weather[0].main

            $temp.text((weather.main.temp) + '°')
            $name.text(weather.name);
            $maxTemp.text(weather.main.temp_min)
            $minTemp.text(weather.main.temp_max)
            $latitude.text(weather.coord.lon)
            $longitude.text(weather.coord.lat)
            $precipitation.text(weather.base.stations)
            $windspeed.text(weather.wind.speed)
            $humidity.text(weather.main.humidity)
            $description.text(weather.weather[0].description)
            $icon.attr('src', 'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png')



            $divc.append($icon)
            $divc.append($temp)
            $newp.append($divc)
            $newp.append($name)
            $newp.append($maxTemp)
            $newp.append($minTemp)
            $newp.append($latitude)
            $newp.append($longitude)
            $newp.append($humidity)
            $newp.append($windspeed)
            $newp.append($precipitation)
            $newp.append($description)            
            $newp.append($icon2)

            $('#result').append($newp)
            if (weather.main.temp > 90) {
                $temp.css('color', 'red')
            } else if (weather.main.temp < 40) {
                $temp.css('color', 'blue')
            }
            const today = new Date()
            const curHr = today.getHours()

            if (curHr < 12) {
                return $('body , html').css('background-color', 'cornflowerblue')
            } else if (curHr < 18) {
                return $('body, html').css('background-color', 'gold')
            } else {
                return $('body, html').css('background-color', 'navy')
            }
        }
    }


}); 
