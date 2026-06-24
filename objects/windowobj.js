// console.log(window.history);
function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}

// now i am going to demonstrate about the setInterval and clearInterval
/*syntax
let intervalID = setInterval(function, delayInMilliseconds);
Example:

let value = 0;
function counter() {
  let domelem = document.getElementById("counter");
  domelem.innerText = value;
  value = value + 1;
}
let intervalId = setInterval(() => {
  counter();
}, 1000);

function stopCounter() {
  clearInterval(intervalId);
}
  */

/*
setTimeout and clearTimeout example 

let deleteTimer; // Variable to hold our timeout ID

function deleteItem() {
  // Show the notification toast
  document.getElementById("notification").style.display = "block";

  // Schedule the permanent deletion in 5 seconds
  deleteTimer = setTimeout(() => {
    console.log("File permanently deleted from database.");
    document.getElementById("notification").style.display = "none";
  }, 5000);
}

function undoDelete() {
  // Cancel the scheduled deletion!
  clearTimeout(deleteTimer);

  // Hide the notification and save the day
  document.getElementById("notification").style.display = "none";
  console.log("Deletion cancelled. File restored.");
}
  */
