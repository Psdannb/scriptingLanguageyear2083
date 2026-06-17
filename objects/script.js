// objects in js
// what is object?
// let objname ={key:value}
//userdefined object
let students = {
  name: "Ram",
  age: 20,
  faculty: "bca",
};

// objname.key: how to access the object values.
// console.log(students.name);
// console.log(students.faculty);

//math object;
let number = -10;
// console.log(Math.abs(number));

let a = 5.2;
let ceilingValue = Math.ceil(a);
// console.log(ceilingValue);
// console.log(Math.floor(a));
let b = 5.5;
// console.log(Math.round(b));
let c = 10.051345631;
// console.log(Math.trunc(c));

let x = 2;
let y = 4;
let result = Math.pow(x, y);
// console.log(result);
// console.log(Math.sqrt(y));

// console.log(Math.min(2, 10, 40, 20, 10, 1));
// console.log(Math.max(2, 10, 40, 20, 10, 1));

// find the largest element from an array of numbers
let numbers = [2, 10, 40, 20, 10, 1];
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));

// learning Math.random and using it to develop a simple game
let outcome = ["Rock", "Paper", "Scissor"];
let randomNumber = Math.random() * 3;
let randomIndex = Math.trunc(randomNumber);
// console.log(randomIndex);
// let computerOutput = outcome[randomIndex];
// let userinput = prompt("What you choose Rock, Paper or Scissor");
// if (userinput == computerOutput) {
//   alert("Lets call it a Draw");
// } else if (
//   (userinput == "Rock" && computerOutput == "Paper") ||
//   (userinput == "Paper" && computerOutput == "Scissor") ||
//   (userinput == "Scissor" && computerOutput == "Rock")
// ) {
//   alert("I won");
// } else {
//   alert("You won");
// }
let num = 8;
// console.log(Math.cbrt(8));

let degree = 45;
let pival = Math.PI;
let radian = (pival / 180) * degree;
// console.log(radian);
// console.log(Math.sin(radian));
// console.log(Math.cos(radian));
// console.log(Math.tan(radian));
// console.log(Math.asin(radian));
// console.log(Math.atan(radian));

// date object

// console.log(Date.getDate());=> this is wrong approach
// let dateobj = new Date();
// console.log(dateobj.getDate());
// console.log(dateobj.getDay());
// console.log(dateobj.getFullYear());
// console.log(dateobj.getHours());
// console.log(dateobj.getMinutes());
// console.log(dateobj.getSeconds());
// console.log(dateobj.getMilliseconds());
// console.log(dateobj.getMonth());
// console.log(dateobj.getTime());
// console.log(dateobj.getUTCDate());
// console.log(dateobj.getUTCHours());

function showtime() {
  let newdateobj = new Date();
  let hours = newdateobj.getHours();
  let minutes = newdateobj.getMinutes();
  let seconds = newdateobj.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`;

  let timeView = document.getElementById("timeview");
  timeView.innerText = time;
  // alert("hhh");
}
// showtime();
setInterval(() => {
  showtime();
}, 1000);

function countdown(time) {
  let totalTime = time * 60 * 60;
  let;
}
