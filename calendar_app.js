var currentDayEl = document.querySelector("#currentDay");
var timeblockContainer = document.querySelector("container");





// Display current day at top of calendar
var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDayEl.textContent = currentTime;



// 