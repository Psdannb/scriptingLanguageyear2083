/* 
2025 Qn : 2 (2022 batch)
Write a javascript program to accept n integer into an array calculate and display the sum and average of the numbers also find the largest number among them. 


let numbersArray = [10, 20, 5, 3, 4, 2, 1, 6, 50];
// what is spread operator? how to pass an array as an argument.
let largestNumber = Math.max(...numbersArray);
console.log("The largest number is: " + largestNumber);

let sum = numbersArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log("The sum of the numbers is: " + sum);
let average = sum / numbersArray.length;
console.log("The average of the numbers is: " + average);
*/

/*   2021 batch : Qn 2
Write a js program to highlight all of the words over eight characters long  in the paragraph text (with red background).


let paragraph = document.getElementById("text");
let paragraphText = paragraph.innerText;
// console.log(paragraph);

let pArray = paragraphText.split(" ");
// console.log(pArray);
let newParagraph = "";

pArray.forEach((word) => {
  if (word.length >= 8) {
    newParagraph += `<span style="background-color: red; color:white">${word}</span> `;
  } else {
    newParagraph += `${word} `;
  }
});
paragraph.innerHTML = newParagraph;
*/

/*
2020 Batch Qn:2 (5 marks)
Write a HTML Code to design a form with three radio button green, red, and blue. Write a Javascript code that will change the background color of the page when user clicks on particular button .
*/
function changeColor(color) {
  let body = document.getElementById("body");
  body.style.backgroundColor = color;
}
/*
let greenbtn = document.getElementById("green");
let redbtn = document.getElementById("red");
let bluebtn = document.getElementById("blue");

greenbtn.addEventListener("click", () => {
  changeColor("green");
});
redbtn.addEventListener("click", () => {
  changeColor("red");
});
bluebtn.addEventListener("click", () => {
  changeColor("blue");
});
*/

/*
let bgbutton = document.getElementsByName("bgbutton");
// console.log(bgbutton);
bgbutton.forEach((element) => {
  // console.log(element);
  element.addEventListener("click", () => {
    let elemValue = element.value;
    changeColor(elemValue);
  });
});

*/
/*
2019 Batch question number : 3
QN: What is NAN in js? Write js code to change background color of  web page every second.

let color = "blue";
function changeBackgroundColor() {
  let body = document.getElementById("body");
  body.style.backgroundColor = color;
  if (color == "blue") {
    color = "red";
  } else {
    color = "blue";
  }
}
setInterval(() => {
  changeBackgroundColor();
}, 1000);
*/

/*
2019 Batch question number : 4
QN: What is arrow function? write js code to calculate factorial of given number using arrow function.

const calculateFactorial = (n) => {
  if (n == 0) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
};
let result = calculateFactorial(5);
console.log(result);
*/

/*
2018 Batch QN:4
what is an immediately Invoked function in javascript? Explain with suitable Example.
ANS:
An Immediately Invoked Function  is a JavaScript function that is defined and executed immediately after it is created. Unlike normal functions,it does not need to be called explicitly.
syntax: 
(function () {
    // Statements
})();

or using an arrow function:

(() => {
    // Statements
})();
Note:The function runs once and cannot be called again unless it is defined again.
example 1:
(function () {
  alert("welocome to our site");
})();
example 2:
(() => {
  console.log("I am immediately invoked arrow function");
})();

*/
/*
2018 Batch QN:9 (a)
Write a program which includes a function sum(). This function sum() should be designed to add an aribitary list of parameters.(for example, if you call the function sum() as sum(1,2) it should return the result 3 and if again you call the function sum() as sum(1,3,4) it should return the result 8).


function sum(...numbers) {
  // console.log(numbers);
  let sum = numbers.reduce((acc, elem) => acc + elem);
  return sum;
}
// let result = sum(1, 2);
// let output = `The sum function returns ${result}`;
// console.log(output);

let result = sum(1, 3, 4);
let output = `The sum function returns ${result}`;
console.log(output);
*/
/*
2018 Batch QN:9 (b)
Write a program that displays the continuous time in the webpage. The time should be in  the format of HH:MM:SS.

let timedisplay = document.getElementById("timedisplay");
function showtime() {
  let dateObj = new Date();
  let hours = dateObj.getHours();
  // console.log(hours);
  let min = dateObj.getMinutes();
  // console.log(min);
  let sec = dateObj.getSeconds();
  // console.log(sec);
  let output = `${hours}:${min}:${sec}`;
  timedisplay.innerText = output;
}
showtime();
setInterval(() => {
  showtime();
}, 1000);
*/
/*
2017 Batch QN:2 
Write javascript code to print smallest and large number among elements of an array.

let numbers = [10, 1, 5, 50, 100, 200, 55, 29, 67, -200, 100000];
let maxValue = Math.max(...numbers);
let output1 = ` The largest number is :${maxValue}`;
// console.log(maxvalue);
let minValue = Math.min(...numbers);
// console.log(minValue);
let output2 = ` The Smallest number is :${minValue}`;
let outputdiv = document.getElementById("numberdisplay");
outputdiv.append(output1);
let brtag = document.createElement("br");
outputdiv.append(brtag);
outputdiv.append(output2);
*/
