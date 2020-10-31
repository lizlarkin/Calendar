$(document).ready(function () {
// Display current day and time at top of calendar
var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(currentTime);

    // Save to local storage
    $(".saveBtn").on("click", function () {

        var userText = $(this).siblings(".input-text").val();
        var timeBlock = $(this).siblings(".input-text").attr("id");
        localStorage.setItem(timeBlock, userText);

    })

    // Change colors based on current time
    function updateHours() {
        var currentHour = moment().hours();
        $(".input-text").each(function () {
            var blockHour = parseInt($(this).attr("id"));

            if (currentHour > blockHour) {
                $(this).addClass("past");
            } else if (currentHour === blockHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    updateHours()

    // Keeps items displaying on page from local storage
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
})

