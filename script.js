//global variables

//wrap with document.ready function


//function create hour blocks
//create row
//create columns- 3 columns, time, task, save
//add them to the page

//event listener for save button--function save to local storage
//function write from local storage

//if else statements for changing colors as time marches on

//wrap with document.ready function
$(document).ready(function () {
    //display date using moment()
    var now = moment();
    var currentDate = now.format("MM DD YYYY");
    $("#currentDay").text("Today's Date: " + currentDate);

    //function to create rows and columns

    for (var i = 0; i < 9; i++) {
        var rowBlock = $("<div>").addClass("row");
        var timeBlock = $("<div>").addClass("time-block col-md-2");
        var taskBlock = $("<textarea>").addClass("col-md-9");
        var saveButton = $("<button>").addClass("saveBtn col-md-1").html('<i class="fas fa-save"></i>');
        //add elements to the DOM
        $(".container").append(rowBlock);
        $(rowBlock).append(timeBlock);
        $(timeBlock).after(taskBlock);
        $(taskBlock).after(saveButton);

        //print the time on each timeblock
        $(timeBlock).text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
        timeBlock.attr('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));

        //color coding statement
        if (now.isSame(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
            $(taskBlock).addClass('present');

        } else if (now.isBefore(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
            $(taskBlock).addClass('future');

        } else if (now.isAfter(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
            $(taskBlock).addClass('past');
        }

    }









});