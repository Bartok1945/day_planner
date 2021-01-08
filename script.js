
$(document).ready(function () {


    // display date using moment()
    var now = moment();
    var currentDate = now.format("MM DD YYYY");
    $("#currentDay").text("Today's Date: " + currentDate);

    //function to create rows and columns

    for (var i = 0; i < 9; i++) {
        var rowBlock = $("<div>").addClass("row");
        var timeBlock = $("<div>").addClass("time-block col-md-2");
        var taskBlock = $("<textarea>").addClass("schedule-item col-md-9");
        var saveButton = $("<button>").addClass("saveBtn col-md-1").html('<i class="fas fa-save"></i>');
        $(timeBlock).text(moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));
        var timeHour = (moment('9:00 AM', 'hh:mm A').add(i, 'hours').format("hA"));
        timeBlock.attr('id', timeHour);
        
        //add elements to the DOM
        $(".container").append(rowBlock);
        $(rowBlock).append(timeBlock);
        $(timeBlock).after(taskBlock);
        $(taskBlock).after(saveButton);
   
        //color coding statement
        if (now.isSame(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
            $(taskBlock).addClass('present');

        } else if (now.isBefore(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
            $(taskBlock).addClass('future');

        } else if (now.isAfter(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
            $(taskBlock).addClass('past');
        }
    }
    // save event to local storage
    $(".saveBtn").on("click", function () {
        var hourlyArray = JSON.parse(localStorage.getItem("task")) || [];
        for (var i = 0; i < hourlyArray.length; i++) {

            //**TO BE FINISHED** statement to clear storage when new tasks are added

            // if (hourlyArray[i].hour===$(this).siblings("div.time-block").attr("id")) {
            //     hourlyArray[i].event=$(this).prev().val()
            //     //only if it wasn't found, push it, variable true/false
            // }
        }

        // console.log($(this))
        hourlyArray.push({
            event: $(this).prev().val(),
            hour: $(this).siblings("div.time-block").attr("id"),
        })
        localStorage.setItem("task", JSON.stringify(hourlyArray));
    });

    if (localStorage.getItem("task") !== null) {
        hourlyArray = JSON.parse(localStorage.getItem("task"));
        hourlyArray.forEach(function (task) {
            $("#" + task.hour)[0].nextSibling.value = (task.event);

        })
    };


});