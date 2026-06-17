/* Bipana Bhattarai Question
Q)How to create a timer like we see normally in offer in most of the ecommerce website using the js.
solution :
*/
// first of all lets set the target date as follows:
let targetDate = new Date("Jun 31, 2026 23:59:59").getTime();
// console.log(targetDate);
/*this target date is in milisecond
now lets create a function which will find the remaining time*/
function timer() {
  let currentTime = new Date().getTime();
  let timeLeft = targetDate - currentTime;
  let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hoursLeft = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  //  Output the result in the HTML elements
  document.getElementById("days").innerText = daysLeft;
  document.getElementById("hours").innerText = hoursLeft;
  document.getElementById("minutes").innerText = minutesLeft;
  document.getElementById("seconds").innerText = secondsLeft;
}
setInterval(() => {
  timer();
}, 1000);
