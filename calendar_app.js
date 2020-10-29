// Access HTML Elements
var currentDayEl = document.querySelector("#currentDay");
var timeblockContainer = document.querySelector("#container");
var rowEl = document.querySelector(".row");





// Display current day at top of calendar
var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
currentDayEl.textContent = currentTime;
console.log(typeof currentTime);

// Create variable for current hour
var currentHour = parseInt(moment().format("H"));
console.log (currentHour);
console.log( typeof currentHour);

// Change row appearance based on current time
for (let i = 9; i < 18; i++) {
    console.log([i]);   
    if (currentHour === i) {
        console.log("now");
        rowEl.setAttribute("style", "color:blue; border:2px solid black;");
        rowEl.textContent = "now!!!"[i];
    } else if (currentHour > i) {
        console.log("past");
        rowEl.textContent = "past!!!"[i];
    } else if (currentHour < i) {
        console.log("future");
        rowEl.textContent = "future!!!"[i];
    }
}