let output = document.getElementById("display");
// console.log(output);
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let add = document.getElementById("add");
let equalsto = document.getElementById("equals");
let clear = document.getElementById("clear");
let del = document.getElementById("del");

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
add.addEventListener("click", () => {
  addInput("+");
});
equalsto.addEventListener("click", () => {
  //   console.log(displaystring);

  if (displaystring.length > 0) {
    let result = eval(displaystring);
    //   console.log(result);
    output.value = result;
    displaystring = result;
    cssMaintain(true);
  }
});

clear.addEventListener("click", () => {
  displaystring = " ";
  output.value = displaystring;
});
del.addEventListener("click", () => {
  let displayArray = displaystring.split("");
  //   console.log(displayArray);
  displayArray.pop();
  displaystring = displayArray.join("");
  output.value = displaystring;
});

function cssMaintain(isResult) {
  if (isResult) {
    output.style.textAlign = "left";
  } else {
    output.style.textAlign = "right";
  }
}
