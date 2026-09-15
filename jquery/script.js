// document.getElementById("message").innerHTML = "Hello World!";

$(document).ready(function () {
  //   $("#message").html("Hello World!");
  //   $("#myForm").submit(function (e) {
  //     e.preventDefault();
  //     var inputValue = $("#inputField").val();
  //     alert(inputValue);
  //   });
  //   $("#inputField").val("Name");
  //   $("#hide").click(function () {
  //     $("#textcontent").hide(1000);
  //   });
  //   $("#show").click(function () {
  //     $("#textcontent").show(1000, function () {
  //       alert("Text is shown");
  //     });
  //   });
  //   $("#hide").click(function () {
  //     $("#textcontent").fadeOut(1000);
  //   });
  //   $("#show").click(function () {
  //     $("#textcontent").fadeIn(5000);
  //   });
  /*$("#hide").click(function () {
    $("#textcontent").slideUp(1000);
  });

  $("#show").click(function () {
    $("#textcontent").slideDown(5000);
  });
  */

  /*
form handling using jquery
  */

  $("#myform").submit(function (e) {
    e.preventDefault();
    /*getting the value
    let usernamevalue = $("#username").val();
    alert(usernamevalue);
    */

    /*setting the value
     $("#username").val("Dan");
     */
    // let formvalue = $("#myform").serialize();
    // console.log(formvalue);

    // $("#myform")[0].reset();

    // let checkedvalue = $("#policy").prop("checked");
    // console.log(checkedvalue);

    let name = $("#myform").find("input[name='username']").val();
    console.log(name);
  });
});
