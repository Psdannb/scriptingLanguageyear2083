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

// let num = 8;
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

/*function showtime() {
  let newdateobj = new Date();
  let hours = newdateobj.getHours();
  let minutes = newdateobj.getMinutes();
  let seconds = newdateobj.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`;

  let timeView = document.getElementById("timeview");
  timeView.innerText = time;
}
// showtime();
setInterval(() => {
  showtime();
}, 1000); */

// Number object and its methods
let numObj = new Number(12364237894952345.67);

// console.log("Number object:", numObj);
// console.log("toExponential:", numObj.toExponential(4));
// console.log("toFixed:", numObj.toFixed(3));
// console.log("toString:", numObj.toString());
// console.log("valueOf:", numObj.valueOf());
// console.log("toLocaleString:", numObj.toLocaleString());

// let num = 12345678;
// console.log(num.toLocaleString());

// String object and its methods
let strObj = new String("Hello, World! JavaScript ");

// console.log("String object:", strObj);
// console.log("charAt:", strObj.charAt(0));
// console.log("charCodeAt:", strObj.charCodeAt(0));
// console.log("concat:", strObj.concat(" - Learning"));
// console.log("indexOf:", strObj.indexOf("o"));
// console.log("lastIndexOf:", strObj.lastIndexOf("o"));
// console.log("localeCompare:", strObj.localeCompare("Hello, world!"));
// console.log("match:", strObj.match(/JavaScript/));
// console.log("replace:", strObj.replace("World", "Friends"));
console.log("search:", strObj.search("JavaScript"));
// console.log("slice:", strObj.slice(0, 5));
// console.log("split:", strObj.split(","));
// console.log("substr:", strObj.substr(7, 5));
// console.log("substring:", strObj.substring(7, 12));
// console.log("toLowerCase:", strObj.toLowerCase());
// console.log("toUpperCase:", strObj.toUpperCase());
// console.log("toString:", strObj.toString());
// console.log("valueOf:", strObj.valueOf());
// console.log("toLocaleLowerCase:", strObj.toLocaleLowerCase());
// console.log("toLocaleUpperCase:", strObj.toLocaleUpperCase());

// localCompare Example
// let fruit1 = "apple";
// let fruit2 = "banana";

// console.log(fruit1.localeCompare(fruit2)); // Returns -1 ("apple" comes before "banana")
// console.log(fruit2.localeCompare(fruit1)); // Returns 1  ("banana" comes after "apple")
// console.log(fruit1.localeCompare("apple")); // Returns 0  (They are identical)

// HTML string methods (older JavaScript methods)
let htmlText = "JavaScript";

// console.log("anchor:", htmlText.anchor("jsLink"));
// console.log("big:", htmlText.big());
// console.log("blink:", htmlText.blink());
// console.log("bold:", htmlText.bold());
// console.log("fixed:", htmlText.fixed());
// console.log("fontcolor:", htmlText.fontcolor("red"));
// console.log("fontSize:", htmlText.fontsize(5));
// console.log("italics:", htmlText.italics());
// console.log("link:", htmlText.link("https://www.w3schools.com"));
// console.log("small:", htmlText.small());
// console.log("strike:", htmlText.strike());
// console.log("sub:", htmlText.sub());
// console.log("sup:", htmlText.sup());

// const outputDiv = document.getElementById("output");
// function showResult(label, value) {
//   const p = document.createElement("p");
//   p.innerHTML = `<strong>${label}:</strong> ${value}`;
//   outputDiv.appendChild(p);
// }

// showResult("anchor", htmlText.anchor("jsLink"));
// showResult("big", htmlText.big());
// showResult("blink", htmlText.blink());
// showResult("bold", htmlText.bold());
// showResult("fixed", htmlText.fixed());
// showResult("fontcolor", htmlText.fontcolor("red"));
// showResult("fontSize", htmlText.fontsize(5));
// showResult("italics", htmlText.italics());
// showResult("link", htmlText.link("https://www.w3schools.com"));
// showResult("small", htmlText.small());
// showResult("strike", htmlText.strike());
// showResult("sub", htmlText.sub());
// showResult("sup", htmlText.sup());
