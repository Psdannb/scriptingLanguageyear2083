// alert("Hello! This is a dialog box.");

// let username = prompt("Please enter your name:");
// console.log("Username:", username);

// let userres = confirm("Do you want to proceed?");
// console.log("User response:", userres);

// TASK
let username = prompt("Who are you?");
let IsConfirm = confirm("Are you enjoying JavaScript?");
if (IsConfirm) {
  let msg = `Welcome, ${username}! Great to hear you're enjoying JavaScript!`;
  document.write(msg);
} else {
  let msg = `Welcome, ${username}! Don't worry, it gets easier!`;
  document.write(msg);
}
function knowYourself() {
  alert("Keep practicing — you're doing great!");
}
