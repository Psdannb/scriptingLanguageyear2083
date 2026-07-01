/*
Here we are going to discuss how we can access the form elements values/contents and manipulate them.
We will also discuss about how to use them in the js and for what purposes.



*/

let registerform = document.getElementById("registerform");
registerform.addEventListener("submit", (event) => {
  event.preventDefault();
  /*
1.textfield,textarea and hidden fields 
how to get values and set values?
key point: .value;
example:
*/

  let textfield = document.getElementById("username");
  //   console.log(textfield.value); // get value
  //   textfield.value = "new value"; // set value

  let hiddenfield = document.getElementById("hiddenfield");
  //   console.log(hiddenfield.value); // get value
  //   hiddenfield.value = "new hidden value"; // set value

  let textarea = document.getElementById("textarea");
  //   console.log(textarea.value); // get value
  //   textarea.value = "new textarea value"; // set value
  /*
2.select boxes
how to get and set selectedIndex ?
key point: .selectedIndex, .value
Example:
*/
  let selectbox = document.getElementById("faculty");
  //   console.log(selectbox.value); // get value
  //   selectbox.value = "BIM"; // set value
  //   console.log(selectbox.selectedIndex); // get selectedIndex
  //   selectbox.selectedIndex = 2; // set selectedIndex
  /*
3.Checkboxes
how to get checked value and set ?
key point : .checked
Example:
*/

  let checkbox = document.getElementById("agree");
  //   console.log(checkbox.checked); // get checked value
  //   checkbox.checked = true; // set checked value
  /*
4.radiobuttons
how to get and set selectedIndex?
key point : .checked,.value
Example:
*/
  let radiobuttons = document.getElementsByName("gender");
  //   radiobuttons.forEach((radio) => {
  //     // console.log(radio.value);
  //     if (radio.checked) {
  //     //   console.log(radio.value); // get selected value
  //     }
  //   });

  radiobuttons.forEach((radio) => {
    if (radio.value === "Female") {
      radio.checked = true; // set selected value
    }
  });
  /*
5.submit button
optional here as we have already discussed these things on event handling but lets have a look on this simple example


*/
});
