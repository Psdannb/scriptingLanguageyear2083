function clicked() {
  alert("Button has been clicked");
}

let countbtn = document.querySelector("#countbtn");

// console.log(countbtn);
// countbtn.addEventListener("click", clicked);
let clickValue = 0;
countbtn.addEventListener("click", () => {
  clickValue++;
  let msg = `The button has been clicked ${clickValue} times`;
  //   alert(msg);
  console.log(msg);
});
