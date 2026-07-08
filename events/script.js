function clicked() {
  alert("Button has been clicked");
}

let countbtn = document.querySelector("#countbtn");
let removecountbtn = document.getElementById("removeEvent");
// console.log(countbtn);
// countbtn.addEventListener("click", clicked);

countbtn.addEventListener("click", countclick);
setTimeout(() => {
  countbtn.removeEventListener("click", countclick);
}, 2000);

removecountbtn.addEventListener("click", () => {
  countbtn.removeEventListener("click", countclick);
});
let clickValue = 0;
function countclick() {
  clickValue++;
  let msg = `The button has been clicked ${clickValue} times`;
  //   alert(msg);
  console.log(msg);
}
// document.addEventListener("scroll", () => {
//   console.log("scroll detected");
// });
// document.addEventListener("DOMContentLoaded", () => {
//   alert("Window content loaded sucessfully");
// });

// document.addEventListener("mousemove", () => {
//   console.log("Mouse moved");
// });
document.addEventListener("keypress", (event) => {
  // console.log("Keyboard btn is pressed");
  // console.log(event);
});

let mouseeventbtn = document.getElementById("mouseevent");
// mouseeventbtn.addEventListener("mouseover", mouseventhandler);
// mouseeventbtn.addEventListener("mouseout", mouseouteventhandler);
// mouseeventbtn.addEventListener("dblclick", dblclickhandler);

function mouseventhandler() {
  console.log("mouse over event is handled");
}

function mouseouteventhandler() {
  console.log("mouse out event is handled");
}
function dblclickhandler() {
  console.log("double clicked");
}

let ytlink = document.getElementById("ytlink");
ytlink.addEventListener("click", (Event) => {
  // console.log(Event);
  Event.preventDefault();
});
