//variables

var currentDate
var currentHour


    $(document).ready(function() {
        var interval = setInterval(function() {
            var momentNow = moment();
            $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                                + momentNow.format('dddd')
                                 .substring(0,3).toUpperCase());
            $('#time-part').html(momentNow.format('A hh:mm:ss'));
        }, 100);
    });

//functions

//localStorage

