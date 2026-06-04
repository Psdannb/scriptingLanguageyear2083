let age = 20;
// console.log(age);
// if....else if

/*if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a minor.");
} else if (age >= 0) {
  console.log("You are a child.");
} else {
  console.log("Invalid age.");
}
*/

// switch statement
/*let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  // Add more cases as needed
  default:
    console.log("Invalid day.");
}
*/

// for loop
/*for (initialization; condition; increment/decrement) {
  console.log("Iteration: " + i);
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
    // document.write(" ");
  }
  document.write("<br>");
}
*/

/* while loop 
while(variable condition) {
    block of code to be executed
}

let x = -20;
while (x >= 0) {
while (x >= 0) {
  console.log(x);
  x--;
}*/

/* do...while loop
do {
  block of code to be executed
} while (condition);

 let x = 10;
 do {
   console.log(x);
   x--;
 } while (x >= 0);
   */
/* sanam question example
let name = "dan bahadur adhikari";
let eg = `my name is ${name}`;
console.log(eg);
*/

// function
function greet() {
  alert("Hello, welcome to JavaScript!");
}
// greet();
function student(name) {
  let msg = `Hello ${name}`;
  alert(msg);
}
// student("sanam");
// student("Bipana");

function add(a, b) {
  let c = a + b;
  // console.log(c);
  return c;
  console.log(
    "This will not be executed because it's after the return statement.",
  );
}
// add(20, 30);
let output = add(5, 10);
// console.log(output); // This will log the returned value of the add function.
//  arrow function
let multiply = (x, y) => {
  return x * y;
  // return add(x, y);
};
let product = multiply(4, 5);
console.log(product); // This will log the product of 4 and 5, which is 20.
