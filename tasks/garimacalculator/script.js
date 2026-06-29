let output = document.getElementById("display");
// console.log(output);
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let add = document.getElementById("add");
let equalsto = document.getElementById("equals");
let clear = document.getElementById("clear");
let del = document.getElementById("del");
let sqrt = document.getElementById("sqrt");
let nine = document.getElementById("nine");

let displaystring = "";
function addInput(number) {
  displaystring += number;
  output.value = displaystring;
  cssMaintain(false);
}

zero.addEventListener("click", () => {
  addInput(0);
});
one.addEventListener("click", () => {
  addInput(1);
});
nine.addEventListener("click", () => {
  addInput(9);
});
add.addEventListener("click", () => {
  addInput("+");
});
equalsto.addEventListener("click", calculation);

clear.addEventListener("click", () => {
  displaystring = "";
  output.value = displaystring;
});
del.addEventListener("click", () => {
  let displayArray = displaystring.split("");
  //   console.log(displayArray);
  displayArray.pop();
  displaystring = displayArray.join("");
  output.value = displaystring;
});

sqrt.addEventListener("click", () => {
  addInput("√");
  equalsto.removeEventListener("click", calculation);
  equalsto.addEventListener("click", squareroot);
});

function squareroot() {
  cssMaintain(true);
  // console.log(displaystring);
  let displayArray = displaystring.split("");
  // console.log(displayArray);
  displayArray.shift();
  let actualNumberstring = displayArray.join("");
  // console.log(actualNumberstring);
  let actualNumber = parseInt(actualNumberstring);
  // console.log(actualNumber);
  let result = Math.sqrt(actualNumber);
  // console.log(result);
  displaystring = result.toString();
  output.value = displaystring;
  equalsto.removeEventListener("click", squareroot);
  equalsto.addEventListener("click", calculation);
}
function cssMaintain(isResult) {
  if (isResult) {
    output.style.textAlign = "left";
  } else {
    output.style.textAlign = "right";
  }
}

function calculation() {
  if (displaystring.length > 0) {
    let result = eval(displaystring);
    //   console.log(result);
    output.value = result;
    displaystring = result;
    cssMaintain(true);
  }
}
