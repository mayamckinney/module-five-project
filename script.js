// this function runs as soon as the website loads

$(document).ready(function () {

    // this will populate jumbotron with current day & time

    var today = moment().format("LLL");
    var currentDay = document.getElementById("current-day");
    currentDay.innerHTML = today;
    var currentHour = moment().format("HH");

    $(".time-div").each(function () {

        // this pulls the number out of the id, minus the -. you need the 1 otherwise it will pull "hour" aswell

        var timeDiv = $(this).attr("id").split("-")[1];

        // this will add the present, future, and past classes to change the background color based on the current hour of the day

        if (currentHour == timeDiv) {
            $(this).addClass("present");
            $(this).children(".description").addClass("white-text");
        } else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (currentHour > timeDiv) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });
})

// this function saves the value at the button

$(".saveBtn").click(function (event) {
    event.preventDefault();

    //calls siblings from saveBtn & user inputted value
    var value = $(this).siblings(".user-add").val();
    //calls parent of saveBtn w/ attribute of ID and splitting at the -
    var time = $(this).parent().attr("id").split("-")[1];
    // saves inputted value and the hour it was saved on
    localStorage.setItem(time, value);
});

// pulls stored values from previously saved values at each hour

$("#hour-08 .user-add").val(localStorage.getItem("08"));
$("#hour-09 .user-add").val(localStorage.getItem("09"));
$("#hour-10 .user-add").val(localStorage.getItem("10"));
$("#hour-11 .user-add").val(localStorage.getItem("11"));
$("#hour-12 .user-add").val(localStorage.getItem("12"));
$("#hour-13 .user-add").val(localStorage.getItem("13"));
$("#hour-14 .user-add").val(localStorage.getItem("14"));
$("#hour-15 .user-add").val(localStorage.getItem("15"));
$("#hour-16 .user-add").val(localStorage.getItem("16"));
$("#hour-17 .user-add").val(localStorage.getItem("17"));




