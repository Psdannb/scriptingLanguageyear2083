let registerform = document.getElementById("registerform");
let errorElement = document.getElementById("error");
let alphanumericRegex = /^[a-zA-Z0-9]+$/;
errorElement.setAttribute("id", "error");
registerform.addEventListener("submit", (event) => {
  event.preventDefault();

  // Text Fields
  let firstname = document.getElementById("firstname").value.trim();
  let middlename = document.getElementById("middlename").value.trim();
  let lastname = document.getElementById("lastname").value.trim();
  let password = document.getElementById("password").value.trim();
  let passwordresult = alphanumericRegex.test(password);

  if (firstname == "" || lastname == " ") {
    errorElement.textContent = "First Name and Last Name are required.";
  } else if (firstname.length < 2) {
    errorElement.textContent =
      "First Name should be at least 2 characters long.";
  } else if (firstname.length > 8) {
    errorElement.textContent = "First Name should not exceed 8 characters.";
  } else if (lastname.length < 2) {
    errorElement.textContent =
      "Last Name should be at least 2 characters long.";
  } else if (lastname.length > 8) {
    errorElement.textContent = "Last Name should not exceed 8 characters.";
  } else if (!passwordresult) {
    errorElement.textContent =
      "Password should contain only alphanumeric characters.";
  } else {
    errorElement.setAttribute("id", "success");
    errorElement.textContent = "Your form has been submitted successfully.";
    setTimeout(() => {
      registerform.submit();
    }, 3000);
  }
  //   console.log("First Name:", firstname);
  //   console.log("Middle Name:", middlename);
  //   console.log("Last Name:", lastname);

  //   // Hidden Field
  //   let hiddenfield = document.getElementById("hiddenfield");
  //   console.log("Hidden Field:", hiddenfield.value);

  //   // Textarea (Address)
  //   let textarea = document.getElementById("textarea");
  //   console.log("Address:", textarea.value);

  //   // Email
  //   let email = document.getElementById("email");
  //   console.log("Email:", email.value);

  //   // Password
  // let password = document.getElementById("password");
  // console.log("Password:", password.value);

  //   // Phone Number
  //   let phone = document.getElementById("phone");
  //   console.log("Phone:", phone.value);

  //   // Select Box (Faculty)
  //   let selectbox = document.getElementById("faculty");

  //   console.log("Faculty:", selectbox.value);
  //   console.log("Selected Index:", selectbox.selectedIndex);

  //   // Checkbox
  //   let checkbox = document.getElementById("agree");
  //   console.log("Terms Accepted:", checkbox.checked);

  //   // Radio Buttons (Gender)
  //   let radiobuttons = document.getElementsByName("gender");

  //   for (let radio of radiobuttons) {
  //     if (radio.checked) {
  //       console.log("Gender:", radio.value);
  //     }
  //   }

  //   alert("Registration Successful!");
});
